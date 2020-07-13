import {
  Either, EitherLeft, EitherRight,
  eitherRight, eitherLeft,
  mapLeft, mapRight,
  isEitherLeft, isEitherRight,
  chainLeft, chainRight,
  chain, chainLeftRight,
} from '.';
import pipe from './pipe';
import { expectStrictType } from '../type-test-utils';

describe ('either', () => {
  it ('allows to create function with return type Either<T, E>', () => {
    const fn = (value: number): Either<TypeError, number> => (
      value % 2 === 1 ? eitherRight (value) :
      eitherLeft (new TypeError ('value should be odd'))
    );

    expect (fn (1)).toEqual (eitherRight (1));
    expect (fn (2)).toEqual (eitherLeft (new TypeError ('value should be odd')));
  });

  it ('allows to mapLeft an eitherLeft', () => {
    const result =
      pipe (eitherLeft (new Error ('Error: 1')))
        (mapLeft (e => new Error (`Error: <${e.message}> 2`)))
        ();

    expect (result).toEqual (eitherLeft (
      new Error ('Error: <Error: 1> 2'),
    ));
  });

  it ('allows to mapLeft an eitherRight', () => {
    const result = pipe (eitherRight (1))
      (mapLeft ((e: Error) => new Error (`Error: <${e.message}> 2`)))
      ();

    expect (result).toEqual (eitherRight (1));
  });

  it ('allows to mapRight an eitherRight', () => {
    expect (
      pipe (eitherRight (1))
        (mapRight (x => x + 1))
        (mapRight (x => x * 3))
        (),
    ).toEqual (eitherRight (6));
  });

  it ('allows to mapRight an eitherLeft', () => {
    expect (
      pipe (eitherLeft (new Error ('Error: 1')))
        (mapRight ((x: number) => x + 1))
        (mapRight (x => x * 3))
        (),
    ).toEqual (eitherLeft (new Error ('Error: 1')));
  });

  it ('allows to chainLeft an eitherLeft', () => {
    expect (
      pipe (eitherRight (100))
        (chainLeft ((e: Error) => e.message))
        (),
    ).toBeUndefined ();
  });

  it ('allows to chainLeft an eitherRight', () => {
    expect (
      pipe (eitherLeft (new Error ('this is an error')))
        (chainLeft (e => e.message))
        (),
    ).toBe ('this is an error');
  });

  it ('allows to chainRight an eitherRight', () => {
    expect (
      pipe (eitherRight (256))
        (chainRight (x => Math.log2 (x)))
        (),
    ).toBe (8);
  });

  it ('allows to chainRight an eitherLeft', () => {
    expect (
      pipe (eitherLeft (new Error ('it is an error')))
        (chainRight ((x: number) => Math.log2 (x)))
        (),
    ).toBeUndefined ();
  });

  it ('allows to identify if either is left', () => {
    expect (
      pipe (eitherLeft (new Error ('it is an error')))
        (isEitherLeft)
        (),
    ).toBeTruthy ();
  });

  it ('allows to identify is either is not left', () => {
    expect (
      pipe (eitherRight (100))
        (isEitherLeft)
        (),
    ).toBeFalsy ();
  });

  it ('allows to identify if either is right', () => {
    expect (
      pipe (eitherRight (12))
        (isEitherRight)
        (),
    ).toBeTruthy ();
  });

  it ('allows to identify is either is not right', () => {
    expect (
      pipe (eitherLeft ('hello'))
        (isEitherRight)
        (),
    ).toBeFalsy ();
  });

  it ('returns left type', () => {
    const val = eitherLeft ('hello');
    expectStrictType<EitherLeft<string>> (val);
  });

  it ('returns right type', () => {
    const val = eitherRight (12);
    expectStrictType<EitherRight<number>> (val);
  });

  it ('allows to chain left and right intime (left)', () => {
    const incOdd = (x: number): Either<TypeError, number> => (
      x % 2 === 1
        ? eitherRight (x + 1)
        : eitherLeft (new TypeError (`Expected odd number, but received: "${x}"`))
    );

    const res = pipe (incOdd (2))
      (chain (e => e.message, x => x * 2))
      ();

    expectStrictType<string | number> (res);

    expect (res).toBe ('Expected odd number, but received: "2"');
  });

  it ('allows to chain left and right intime (right)', () => {
    const incOdd = (x: number): Either<TypeError, number> => (
      x % 2 === 1
        ? eitherRight (x + 1)
        : eitherLeft (new TypeError (`Expected odd number, but received: "${x}"`))
    );

    const res = pipe (incOdd (3))
      (chain (e => e.message, x => x * 2))
      ();

    expectStrictType<string | number> (res);

    expect (res).toBe (8);
  });

  it ('allows to chain left and right intime (left type assertion)', () => {
    const res = pipe (eitherLeft (new TypeError ('error message')))
      (chain (e => e.message, x => x * 2))
      ();

    expectStrictType<string> (res);
  });

  it ('allows to chain left and right intime (right type assertion)', () => {
    const res = pipe (eitherRight (4))
      (chain ((e: Error) => e.message, x => x * 2))
      ();

    expectStrictType<number> (res);
  });

  it ('allows to chain left and right intime (with single function)', () => {
    const incOdd = (x: number): Either<TypeError, number> => (
      x % 2 === 1
        ? eitherRight (x + 1)
        : eitherLeft (new TypeError (`Expected odd number, but received: "${x}"`))
    );

    const raise = <E extends Error>(error: E) => { throw error; };

    const res = pipe (incOdd (3))
      (chainLeftRight (
        (error, value) => (error != null ? raise (error) : value),
      ))
      ();

    expectStrictType<number> (res);

    expect (res).toBe (4);
  });
});
