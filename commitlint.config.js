module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'build', 'chore', 'ci', 'perf']
        ],
        'type-case': [2, 'always', 'lowerCase'],
        'type-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.']
    }
};
