module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      '__tests__/src/test-utils.js',
      '!__tests__/**/*.test.js'
    ],

    tests: ['__tests__/**/*.test.js'],

    filesWithNoCoverageCalculated: [
      'src/data.js',
      '__tests__/src/test-utils.js'
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  }
}
