module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      'pages/**/*.js',
      '!__tests__/**/*.test.js'
    ],

    tests: ['__tests__/**/*.test.js'],

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
