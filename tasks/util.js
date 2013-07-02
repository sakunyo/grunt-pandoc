/*
 * grunt-pandoc
 * https://github.com/sakunyo/grunt-pandoc
 *
 * Copyright (c) 2013 sakuya sugo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = (function(){

  var util = {};

  /**
   * Console Reporter.
   * @param obj
   * @returns {string}
   */
  util.reporter = function (obj) {
    var key, res = [];

    for (key in obj) {
      if (typeof obj[key] === "object") {
        res.push(key + "-> " + util.reporter(obj[key]));
      } else if (typeof obj[key] === "function") {
        res.push(key + "-> " + obj[key].toString());
      } else {
        res.push(key + "-> " + obj[key]);
      }
    }
    return "\n" + res.join("\n");
  };

  /**
   *
   * @param done
   * @param successLen
   * @param execLen
   */
  util.checkChildTasks = function (done, successLen, execLen) {
    if (successLen === execLen) done(true);
  };

  /**
   *
   * @param exec
   * @param configs
   * @returns {*}
   */
  util.applyFilter = function (exec, configs) {
    if (configs.filter && typeof configs.filter === "function") exec = configs.filter(exec);
    return exec;
  };


  return util;

})();
