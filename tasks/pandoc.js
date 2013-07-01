/*
 * grunt-pandoc
 * https://github.com/sakunyo/grunt-pandoc
 *
 * Copyright (c) 2013 sakuya sugo
 * Licensed under the MIT license.
 */

'use strict';

var _task = {};
_task.fn = {};


(function(fn){
  /**
   * Console Reporter.
   * @param obj
   * @returns {string}
   */
  fn.reporter = function (obj) {
    var key, res = [];

    for (key in obj) {
      if (typeof obj[key] === "object") {
        res.push(key + "-> " + reporter(obj[key]));
      } else if (typeof obj[key] === "function") {
        res.push(key + "-> " + obj[key].toString());
      } else {
        res.push(key + "-> " + obj[key]);
      }
    }
    return "\n" + res.join("\n");
  }
})(_task.fn);


(function(root){
  var PandocRun;

  /**
   * PandocRun
   *
   * @param target  {string} Grunt Multi Task Target
   * @param configs {object}
   * @param files   {object}
   * @returns {*}
   * @constructor
   */
  PandocRun = function(target, configs, files){
    var key;

    this.configs = {};
    for (key in configs) this.configs[key] = configs[key];
    this.configs.target  = target;

    this.files = files || {};

    return this;
  };

  PandocRun.prototype = {
    /**
     * getEXEC
     * Choice Publish Format
     * @param type
     * @returns {string}
     */
    getEXEC: function (type) {
      var exec = [""];

      switch (type || this.configs["publish"]) {
        case "EPUB":
          exec = this.publishEPUB();
          break;
        case "HTML":
          exec = this.publishHTML();
        default:
          break;
      }
      return exec.join(" ");
    },
    /**
     * publishEPUB
     * Setup Pandoc Option (Markdown files to EPUB)
     * @returns {Array} Execute Command Strings
     */
    publishEPUB: function () {
      var exec = ["pandoc"],
          conf = this.configs;

      exec.push("-S");
      exec.push("-o " + conf.target + ".epub");
      exec.push("--epub-metadata="   + conf.metadata);
      exec.push("--epub-stylesheet=" + conf.stylesheet);
      exec.push(this.files["chapters"].join(" "));

      return exec;
    },
    publishHTML: function () {
      var exec = ["pandoc"],
          conf = this.configs;

      exec.push("-f markdown");
      exec.push("-t html");
      exec.push("-o " + conf.target + ".html");
      exec.push(this.files["from"][0]);

      return exec;
    }
  };

  root.PandocRun = PandocRun;
})(_task);



module.exports = function(grunt) {
  var childproc = require("child_process");

  grunt.registerMultiTask('pandoc', 'running pandoc process.', function() {
    var exec = "",
        done = this.async(),
        pandoc;

    pandoc = new _task.PandocRun(
      this.target,          // Output FileName
      this.data["configs"], // Configs
      this.data["files"]    // Convert File Paths.
    );

    exec = pandoc.getEXEC();

    // Execute Command Logging.
    grunt.log.writeln(exec);

    // Execute Async Child Process.
    childproc.exec(exec, function (error, stdout, stderr) {
      if (error || stderr) {
        grunt.fail.fatal("Pandoc Convert Error.");
      } else {
        grunt.log.write(stdout);
        done(true);
      }
    });
  });

};
