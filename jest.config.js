module.exports = {
    'collectCoverageFrom': [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!**/dist/**',
        '!webpack.config.js',
        '!jest.config.js'
    ],
    'moduleNameMapper': {
        '\\.(png|svg)$': '<rootDir>/testing/fileMock',
        '^actions/(.*)': '<rootDir>/actions/$1',
        '^components/(.*)': '<rootDir>/components/$1',
        '^constants/(.*)': '<rootDir>/constants/$1',
        '^containers/(.*)': '<rootDir>/containers/$1',
        '^reducers/(.*)': '<rootDir>/reducers/$1',
        '^reducers': '<rootDir>/reducers/',
        '^selectors/(.*)': '<rootDir>/selectors/$1',
        '^styles/(.*)': '<rootDir>/styles/$1'
    },
    'setupFiles': [
        '<rootDir>/testing/setup.js'
    ],
    'testURL': 'http://localhost',
    'transform': {
        '^.+\\.js[x]?$': 'babel-jest'
    }
}
