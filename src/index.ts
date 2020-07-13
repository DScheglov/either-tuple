export type EitherLeft<L> = [L, null];
export type EitherRight<R> = [null, R];
export type Either<L, R> = EitherLeft<L> | EitherRight<R>;

export type LeftType<Eth extends Either<any, any>> =
  Eth extends EitherLeft<infer L> ? L : never;

export type RightType<Eth extends Either<any, any>> =
  Eth extends EitherRight<infer R> ? R: never;

export const isEitherLeft = <L, R>(either: Either<L, R>): either is EitherLeft<L> =>
  either[0] != null;

export const isEitherRight = <L, R>(either: Either<L, R>): either is EitherRight<R> =>
  either[1] != null;

export const eitherLeft = <L>(value: L): EitherLeft<L> => [value, null];
export const eitherRight = <R>(value: R): EitherRight<R> => [null, value];

export const mapLeft = <SL, DL, R>(mapper: (value: SL) => DL) =>
  (either: Either<SL, R>): Either<DL, R> => (
    isEitherLeft (either)
      ? eitherLeft (mapper (either[0]))
      : eitherRight (either[1])
  );

export const mapRight = <L, SR, DR>(mapper: (value: SR) => DR) =>
  (either: Either<L, SR>): Either<L, DR> => (
    isEitherLeft (either)
      ? eitherLeft (either[0])
      : eitherRight (mapper (either[1]))
  );

export const chainLeft = <L, R, D>(monad: (value: L) => D) =>
  (either: Either<L, R>): D | undefined => (
    isEitherLeft (either) ? monad (either[0]) : undefined
  );

export const chainRight = <L, R, D>(monad: (value: R) => D) =>
  (either: Either<L, R>): D | undefined => (
    isEitherLeft (either) ? undefined : monad (either[1])
  );

export const chain =
  <Eth extends Either<L, R>, DL, DR, L = LeftType<Eth>, R = RightType<Eth>>(
    monadLeft: (value: L) => DL, monadRight: (value: R) => DR,
  ) => (either: Eth): Eth extends EitherLeft<L> ? DL : DR => (
    isEitherLeft<L, R> (either)
      ? monadLeft (either[0]) as any
      : monadRight (either[1]) as any
  );

export const chainLeftRight = <Eth extends Either<L, R>, D, L = LeftType<Eth>, R = RightType<Eth>>(
  monad: (left: L, right: R) => D,
) => (either: Eth): D => monad (either[0], either[1]);
