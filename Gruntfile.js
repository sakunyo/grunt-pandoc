/*
 * grunt-pandoc
 * https://github.com/sakunyo/grunt-pandoc
 *
 * Copyright (c) 2013 sakuya sugo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    pandoc: {
      default_options: {
        configs: {
          "publish"   : 'EPUB',
          "title"     : "Pandoc EPUB Title",
          "metadata"  : "include/metadata.xml",
          "stylesheet": "include/style.css"
        },
        files: {
          "chapters": [ "chapters/header.md",
            "chapters/content.md"
          ]
        }
      },
      custom_options: {
        configs: {
          "publish"   : 'EPUB',
          "title"     : "Pandoc EPUB Title",
          "metadata"  : "include/metadata.xml",
          "stylesheet": "include/style.css"
        },
        files: {
          "chapters": [ "chapters/header.md",
            "chapters/content.md"
          ]
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  // grunt.registerTask('test', ['clean', 'pandoc', 'nodeunit']);
  grunt.registerTask('test', ['pandoc']);

  // By default, lint and run all tests.
  // grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask('default', ['test']);

};
