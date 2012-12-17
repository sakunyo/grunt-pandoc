/*jslint browser: true, sloppy: true*/
/*global window, document, console, module, grunt*/
/**
 * Created with JetBrains WebStorm.
 * User: sakuya.s
 * Date: 12/12/17
 * Time: 13:11
 *
 * Using:
 *  	Pandoc - About pandoc
 *  	http://johnmacfarlane.net/pandoc/
 */



/**
 *
 * @param grunt
 */
module.exports = function (grunt) {
	grunt.loadTasks("grunt-epub-pandoc");


	/**
	 * Grunt Task Configs
	 */
	grunt.initConfig({
		"epub": {
			"myepub": {
				"metadata": "metadata.xml",
				"stylesheet": "style.css",
				"chapters":  [
					"chapters/header.md",
					"chapters/content.md"
				]
			}
		}
	});


	grunt.registerTask('default', "epub");
};

