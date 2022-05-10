module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!<rootDir>/node_modules/',
        '!<rootDir>/path/to/dir/'
    ],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90
        }
    },
    coverageReporters: ['text']
};
