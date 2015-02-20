/**
 * inspired by conformance/types/objectTypeLiteral/methodSignatures/objectTypesWithOptionalProperties
 */

interface I {
	x?: number; // ok
}

class C {
	x?: number; // error
}

struct S {
	x?: number; // error
}
