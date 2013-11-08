/*
 * grunt-html2jsonp
 * https://github.com/zhigui/html2jsonp
 *
 * Copyright (c) 2013 ZhiguiChan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    html2jsonp: {
      default_options: {
        options: {
          callbackName:"appendTemplate",
          separator: '\n'
        },
        files: {
          'tmpl.js': ['*.html'],
        },
      },
      // custom_options: {
      //   options: {
      //     separator: '\n'
      //   },
      //   files: {
      //     'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123'],
      //   },
      // },
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-clean');
  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  //grunt.registerTask('clearTask', ['clean', 'html2jsonp', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['html2jsonp']);

};
