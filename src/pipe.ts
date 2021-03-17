const pipe: {
  (): undefined;
  <T>(
    value: T
  ): T;
  <T, T1>(
    value: T,
    f1: (arg: T) => T1
  ): T1;
  <T, T1, T2>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2
  ): T2;
  <T, T1, T2, T3>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3
  ): T3;
  <T, T1, T2, T3, T4>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4
  ): T4;
  <T, T1, T2, T3, T4, T5>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5
  ): T5;
  <T, T1, T2, T3, T4, T5, T6>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6
  ): T6;
  <T, T1, T2, T3, T4, T5, T6, T7>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7
  ): T7;
  <T, T1, T2, T3, T4, T5, T6, T7, T8>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8
  ): T8;
  <T, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8,
    f9: (arg: T8) => T9
  ): T9;
  <T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8,
    f9: (arg: T8) => T9,
    f10: (arg: T9) => T10
  ): T10;
  <T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8,
    f9: (arg: T8) => T9,
    f10: (arg: T9) => T10,
    f11: (arg: T10) => T11
  ): T11;
  <T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8,
    f9: (arg: T8) => T9,
    f10: (arg: T9) => T10,
    f11: (arg: T10) => T11,
    f12: (arg: T11) => T12
  ): T12;
  <T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8,
    f9: (arg: T8) => T9,
    f10: (arg: T9) => T10,
    f11: (arg: T10) => T11,
    f12: (arg: T11) => T12,
    f13: (arg: T12) => T13
  ): T13;
  <T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8,
    f9: (arg: T8) => T9,
    f10: (arg: T9) => T10,
    f11: (arg: T10) => T11,
    f12: (arg: T11) => T12,
    f13: (arg: T12) => T13,
    f14: (arg: T13) => T14
  ): T14;
  <T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8,
    f9: (arg: T8) => T9,
    f10: (arg: T9) => T10,
    f11: (arg: T10) => T11,
    f12: (arg: T11) => T12,
    f13: (arg: T12) => T13,
    f14: (arg: T13) => T14,
    f15: (arg: T14) => T15
  ): T15;
  <T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8,
    f9: (arg: T8) => T9,
    f10: (arg: T9) => T10,
    f11: (arg: T10) => T11,
    f12: (arg: T11) => T12,
    f13: (arg: T12) => T13,
    f14: (arg: T13) => T14,
    f15: (arg: T14) => T15,
    f16: (arg: T15) => T16
  ): T16;
  <T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8,
    f9: (arg: T8) => T9,
    f10: (arg: T9) => T10,
    f11: (arg: T10) => T11,
    f12: (arg: T11) => T12,
    f13: (arg: T12) => T13,
    f14: (arg: T13) => T14,
    f15: (arg: T14) => T15,
    f16: (arg: T15) => T16,
    f17: (arg: T16) => T17
  ): T17;
  <T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8,
    f9: (arg: T8) => T9,
    f10: (arg: T9) => T10,
    f11: (arg: T10) => T11,
    f12: (arg: T11) => T12,
    f13: (arg: T12) => T13,
    f14: (arg: T13) => T14,
    f15: (arg: T14) => T15,
    f16: (arg: T15) => T16,
    f17: (arg: T16) => T17,
    f18: (arg: T17) => T18
  ): T18;
  <T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8,
    f9: (arg: T8) => T9,
    f10: (arg: T9) => T10,
    f11: (arg: T10) => T11,
    f12: (arg: T11) => T12,
    f13: (arg: T12) => T13,
    f14: (arg: T13) => T14,
    f15: (arg: T14) => T15,
    f16: (arg: T15) => T16,
    f17: (arg: T16) => T17,
    f18: (arg: T17) => T18,
    f19: (arg: T18) => T19
  ): T19;
  <T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>(
    value: T,
    f1: (arg: T) => T1,
    f2: (arg: T1) => T2,
    f3: (arg: T2) => T3,
    f4: (arg: T3) => T4,
    f5: (arg: T4) => T5,
    f6: (arg: T5) => T6,
    f7: (arg: T6) => T7,
    f8: (arg: T7) => T8,
    f9: (arg: T8) => T9,
    f10: (arg: T9) => T10,
    f11: (arg: T10) => T11,
    f12: (arg: T11) => T12,
    f13: (arg: T12) => T13,
    f14: (arg: T13) => T14,
    f15: (arg: T14) => T15,
    f16: (arg: T15) => T16,
    f17: (arg: T16) => T17,
    f18: (arg: T17) => T18,
    f19: (arg: T18) => T19,
    f20: (arg: T19) => T20
  ): T20;
} = (value?: any, ...fns: Function[]) => fns.reduce ((val, fn) => fn (val), value);

export default pipe;
