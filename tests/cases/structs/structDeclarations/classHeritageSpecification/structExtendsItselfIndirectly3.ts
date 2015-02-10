// @Filename: structExtendsItselfIndirectly_file1.ts
struct C extends E { foo: string; } // error

// @Filename: structExtendsItselfIndirectly_file2.ts
struct D extends C { bar: string; }

// @Filename: structExtendsItselfIndirectly_file3.ts
struct E extends D { baz: number; }

// @Filename: structExtendsItselfIndirectly_file4.ts
struct C2<T> extends E2<T> { foo: T; } // error

// @Filename: structExtendsItselfIndirectly_file5.ts
struct D2<T> extends C2<T> { bar: T; }

// @Filename: structExtendsItselfIndirectly_file6.ts
struct E2<T> extends D2<T> { baz: T; }