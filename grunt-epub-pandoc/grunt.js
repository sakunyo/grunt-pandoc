/*jslint browser: true, sloppy: true*/
/*global window, document, console, module, grunt*/
/**
 * Created with JetBrains WebStorm.
 * User: sakuya.s
 * Date: 12/12/17
 * Time: 13:11
 * Licence: BSD Licence
 */


/**
 *
 * @param grunt
 */
module.exports = function(grunt) {
	var childproc = require("child_process");


	/**
	 * epub の簡易コンパイルタスク
	 * 呼び出す外部プログラムに Pandoc を利用
	 *
	 * "epub": {
	 *  	"dist": {
	 *  		"metadata": "metadata.xml",
	 *  		"stylesheet": "style.css",
	 *  		"chapters":  [
	 *  			"header.md",
	 *  			"content.md"
	 *  		]
	 *  	}
	 * }
	 *
	 */
	grunt.registerMultiTask("epub", "epub", function() {
		var exec = ["pandoc -S"],
			done = this.async(),
			i;


		if ("metadata" in this.data) {
			exec.push("--epub-metadata=metadata.xml");
		}


		exec.push("-o " + this.target + ".epub");


		if ("stylesheet" in this.data) {
			exec.push("--epub-stylesheet=" + this.data.stylesheet);
		}


		for (i in this.data.chapters) {
			exec.push(this.data.chapters[i]);
		}


		grunt.log.writeln(
			exec.join(" ")
		);

		childproc.exec(exec.join(" "), function (error, stdout, stderr) {
			if (error || stderr) {
				grunt.fail.fatal("pandoc: epub convert error.");
			} else {
				grunt.log.write(stdout);
				done(true);
			}
		});
	});
};
