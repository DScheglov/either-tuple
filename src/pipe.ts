type IPipeFn<T> = {
  (): T;
  <D>(mapper: (value: T) => D): IPipeFn<D>
}

const pipe = <T>(value: T): IPipeFn<T> => (mapper?: <D>(arg: T) => D) => (
  typeof mapper === 'function' ? pipe (mapper (value)) : value
) as any;

export default pipe;
