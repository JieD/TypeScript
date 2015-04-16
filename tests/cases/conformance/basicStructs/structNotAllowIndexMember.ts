// no indexers are allowed
struct S {
	[x: string]: string;
	[y: number]: string;
}

// private indexers not allowed

struct C {
	private [x: string]: string;
}

struct D {
	private [x: number]: string;
}

struct E<T> {
	private [x: string]: T;
}

// public indexers not allowed

struct C {
	public [x: string]: string;
}

struct D {
	public [x: number]: string;
}

struct E<T> {
	public [x: string]: T;
}

// static indexers not allowed

struct C {
	static [x: string]: string;
}

struct D {
	static [x: number]: string;
}

struct E<T> {
	static [x: string]: T;
}
