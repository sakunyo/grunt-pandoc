grunt-epub-pandoc
=================


pandoc を使った Markdown to Epub 変換 grunt タスク


##grunt.initConfig

	 // grunt task name.
 	"epub": {

		// publish file name.
		"myepub": {

			// metadata file path.
			"metadata": "metadata.xml",

			// stylesheet file path.
			"stylesheet": "style.css",

			// contents (format markdown files)
			"chapters":  [
				"chapters/header.md",
				"chapters/content.md"
			]
		}
	}


##ファイルパス

	├── chapters
	│   ├── content.md
	│   └── header.md
	├── grunt.js
	├── metadata.xml
	└── style.css

