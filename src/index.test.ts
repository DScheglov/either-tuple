import {
  Either, Left, Right,
  mapLeft, map,
  isLeft, isRight,
  chainLeft,
  chain, bichain, extract, extLeft,
} from '.';
import pipe from './pipe';
import { expectStrictType } from '../type-test-utils';

describe ('either', () => {
  it ('allows to create function with return type Either<T, E>', () => {
    const fn = (value: number): Either<TypeError, number> => (
      value % 2 === 1
        ? Right (value)
        : Left (new TypeError ('value should be odd'))
    );

    expect (fn (1)).toEqual (Right (1));
    expect (fn (2)).toEqual (Left (new TypeError ('value should be odd')));
  });

  it ('allows to mapLeft a Left', () => {
    const result =
      pipe (
        Left (new Error ('Error: 1')),
        mapLeft (e => new Error (`Error: <${e.message}> 2`)),
      );

    expect (result).toEqual (Left (
      new Error ('Error: <Error: 1> 2'),
    ));
  });

  it ('allows to mapLeft a Right', () => {
    const result = pipe (
      Right (1),
      mapLeft ((e: Error) => new Error (`Error: <${e.message}> 2`)),
    );

    expect (result).toEqual (Right (1));
  });

  it ('allows to mapRight a Right', () => {
    expect (
      pipe (
        Right (1),
        map (x => x + 1),
        map (x => x * 3),
      ),
    ).toEqual (Right (6));
  });

  it ('allows to mapRight a Left', () => {
    expect (
      pipe (
        Left (new Error ('Error: 1')),
        map ((x: number) => x + 1),
        map (x => x * 3),
      ),
    ).toEqual (Left (new Error ('Error: 1')));
  });

  it ('allows to chainLeft a Left', () => {
    expect (
      pipe (
        Right (100),
        chainLeft ((e: Error) => Left (e.message)),
        either => (isLeft (either) ? extLeft (either) : undefined),
      ),
    ).toBeUndefined ();
  });

  it ('allows to chainLeft a Right', () => {
    expect (
      pipe (
        Left (new Error ('this is an error')),
        chainLeft (e => Left (e.message)),
        either => (isLeft (either) ? extLeft (either) : undefined),
      ),
    ).toBe ('this is an error');
  });

  it ('allows to chain a Right', () => {
    expect (
      pipe (
        Right (256),
        chain ((x: number) => Right (Math.log2 (x))),
        extract,
    ),
    ).toBe (8);
  });

  it ('allows to chain a Left', () => {
    expect (
      pipe (
        Left (new Error ('it is an error')),
        chain ((x: number) => Right (Math.log2 (x))),
        extract,
      ),
    ).toBeUndefined ();
  });

  it ('allows to identify if either is left', () => {
    expect (
      pipe (
        Left (new Error ('it is an error')),
        isLeft,
      ),
    ).toBeTruthy ();
  });

  it ('allows to identify is either is not left', () => {
    expect (
      pipe (
        Right (100),
        isLeft,
      ),
    ).toBeFalsy ();
  });

  it ('allows to identify if either is right', () => {
    expect (
      pipe (
        Right (12),
        isRight,
      ),
    ).toBeTruthy ();
  });

  it ('allows to identify is either is not right', () => {
    expect (
      pipe (
        Left ('hello'),
        isRight,
      ),
    ).toBeFalsy ();
  });

  it ('returns left type', () => {
    const val = Left ('hello');
    expectStrictType<Left<string>> (val);
  });

  it ('returns right type', () => {
    const val = Right (12);
    expectStrictType<Right<number>> (val);
  });

  it ('allows to chain left and right intime (left)', () => {
    const incOdd = (x: number) => (
      x % 2 === 1
        ? Right (x + 1)
        : Left (new TypeError (`Expected odd number, but received: "${x}"`))
    );

    const res = pipe (
      incOdd (2),
      bichain (e => Right (e.message), x => Right (x * 2)),
      extract,
    );

    expectStrictType<string | number> (res);

    expect (res).toBe ('Expected odd number, but received: "2"');
  });

  it ('allows to chain left and right intime (right)', () => {
    const incOdd = (x: number): Either<TypeError, number> => (
      x % 2 === 1
        ? Right (x + 1)
        : Left (new TypeError (`Expected odd number, but received: "${x}"`))
    );

    const res = pipe (
      incOdd (3),
      chain ((x: number) => Right (x * 2)),
      extract,
    );

    expectStrictType<string | number> (res);

    expect (res).toBe (8);
  });

  it ('allows to chain left and right intime (left type assertion)', () => {
    const res = pipe (
      Left (new TypeError ('error message')),
      bichain (
        error => Right (error.message),
        (x: number) => Right (x * 2),
      ),
      extract,
    );

    expectStrictType<string | number> (res);
  });

  it ('allows to chain left and right intime (right type assertion)', () => {
    const res = pipe (
      Right (4),
      bichain ((e: Error) => Right (e.message), x => Right (x * 2)),
      extract,
    );

    expectStrictType<number | string> (res);
  });
});
