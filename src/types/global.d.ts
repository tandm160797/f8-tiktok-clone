export {};

declare global {
	/**
	 * Now declare things that go in the global namespace,
	 * or augment existing declarations in the global namespace.
	 */

	type Children = string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}
