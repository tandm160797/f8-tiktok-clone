export const toTitleCase = (phrase: string, separator: string = ' '): string =>
	phrase
		.toLowerCase()
		.split(separator)
		.map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
		.join(separator);

export const toCamelCase = (phrase: string, separator: string = ' '): string =>
	phrase
		.toLowerCase()
		.split(separator)
		.map((word, idx) => {
			if (!idx) return `${word.charAt(0).toLowerCase()}${word.slice(1)}`;

			return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
		})
		.join('');

export const toPascalCase = (phrase: string, separator: string = ' '): string =>
	phrase
		.toLowerCase()
		.split(separator)
		.map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
		.join('');

export const toLowerCase = (phrase: string): string => phrase.toLowerCase();

export const toUpperCase = (phrase: string): string => phrase.toUpperCase();

export const toSentenceCase = (phrase: string): string =>
	`${phrase.charAt(0).toUpperCase()}${phrase.toLowerCase().slice(1)}`;

export const toKebabCase = (phrase: string): string =>
	phrase
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();
