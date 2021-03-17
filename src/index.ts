export type Left<E> = [undefined, E];
export type Right<T> = [T];

export type Either<E, T> = Left<E> | Right<T>;

export const Left = <E>(error: E): Left<E> => [undefined, error];
export const Right = <T>(value: T): Right<T> => [value];

export const isLeft = <E, T>(either: Either<E, T>): either is Left<E> => either.length > 1;
export const isRight = <E, T>(either: Either<E, T>): either is Right<T> => either.length === 1;

export const extRight = <T>(right: Right<T>): T => right[0];
export const extLeft = <E>(left: Left<E>): E => left[1];

export const of = Right;

export const map = <T, D>(mapper: (value: T) => D) =>
  <E>(either: Either<E, T>): Either<E, D> => (
    isRight (either) ? Right (mapper (extRight (either))) : either
  );

export const chain = <T, D, DE>(process: (value: T) => Either<DE, D>) =>
  <E>(either: Either<E, T>): Either<DE | E, D> => (
    isRight (either) ? process (extRight (either)) : either
  );

export const tap = <T>(effect: (value: T) => void) => <E>(either: Either<E, T>) => {
  if (isRight (either)) effect (extRight (either));
  return either;
};

export const extract = <E, T>(either: Either<E, T>): T | undefined => (
  isRight (either) ? extRight (either) : undefined
);

export const bimap = <T, E, DE, DT>(leftMapper: (error: E) => DE, rightMapper: (value: T) => DT) =>
  (either: Either<E, T>): Either<E | DE, T | DT> => (
    isRight (either)
      ? Right (rightMapper (extRight (either)))
      : Left (leftMapper (extLeft (either)))
  );

export const bichain = <T, E, LDE, LDT, RDE, RDT>(
  leftProcess: (error: E) => Either<LDE, LDT>,
  rightProcess: (value: T) => Either<RDE, RDT>,
) => (either: Either<E, T>): Either<LDE | RDE, LDT | RDT> => (
    isRight (either)
      ? rightProcess (extRight (either))
      : leftProcess (extLeft (either))
  );

export const mapLeft = <E, DE>(mapper: (error: E) => DE) =>
  <T>(either: Either<E, T>) => (
    isRight (either) ? either : Left (mapper (extLeft (either)))
  );

export const chainLeft = <E, D, DE>(process: (error: E) => Either<DE, D>) =>
  <T>(either: Either<E, T>): Either<DE, T | D> => (
    isRight (either) ? either : process (extLeft (either))
  );

export const tapLeft = <E>(effect: (error: E) => void) => <T>(either: Either<E, T>) => {
  if (isLeft (either)) effect (extLeft (either));
  return either;
};

export const extractLeft = <E, T>(either: Either<E, T>): E | undefined => (
  isLeft (either) ? extLeft (either) : undefined
);

export const Either = {
  Left,
  Right,
  of,
  isLeft,
  isRight,
  extRight,
  extLeft,
  map,
  chain,
  tap,
  extract,
  bimap,
  bichain,
  mapLeft,
  chainLeft,
  tapLeft,
  extractLeft,
};

export default Either;
