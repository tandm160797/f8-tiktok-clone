module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'refactor', 'test', 'style', 'revert']],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],

		'subject-case': [2, 'always', 'sentence-case'],
		'subject-empty': [2, 'never'],
		'subject-min-length': [2, 'always', 10],
		'subject-max-length': [2, 'always', 120],
		'subject-full-stop': [2, 'always', '.']
	}
};
