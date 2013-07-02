# grunt-pandoc

Pandoc Publish Runner for Grunt.

Markdown to Other Document Format Convert.

* Markdown to EPUB
* Markdown to HTML


## Getting Started
This plugin requires
* Grunt `~0.4.1`
* Pandoc Binary
Download => [http://johnmacfarlane.net/pandoc/](http://johnmacfarlane.net/pandoc/)


If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as
 well as install and use Grunt plugins. Once you're familiar with that process, you may install
 this plugin with this command:

```shell
npm install grunt-pandoc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pandoc');
```

## The "pandoc" task

### Overview
In your project's Gruntfile, add a section named `pandoc` to the data object passed into `grunt.initConfig()`.


#### Markdown to EPUB
```js
function myFilterFunc(context: string):string {
	return context;
}

grunt.initConfig({
  pandoc: {
    My_EPUB: { // OUTPUT file name
      configs: {
        "publish"   : 'EPUB',                 // Publish File Format.
        "title"     : "My EPUB Title",        // EPUB Title
        "metadata"  : "include/metadata.xml", // EPUB include META data File Path.
        "stylesheet": "include/style.css"     // EPUB include StyleSheet File Path.
        "filter"    : myFilterFunc            // Calling Before Execute Command.
      },
      files: {
        "chapters": [
          "chapters/header.md", // Require Header File.
          "chapters/content.md" // Chapter Files.
          ...
        ]
      }
    }
  }
})
```

#### Markdown to HTML
```js
function myFilterFunc(context: string):string {
	return context;
}

grunt.initConfig({
  pandoc: {
    toHtml: {
      configs: {
        "publish"   : 'HTML',       // Publish File Format.
        "filter"    : myFilterFunc  // Calling Before Execute Command.
      },
      files: {
        "from": [
          "input/toHTML.md",
          "input/toHTML.md"
          ...
        ]
      }
    }
  }
})
```

## Release History
* 2013-07-02	0.2.2
	* Execute User Filter before Execute Command.
	* Publish Format Markdown to HTML.
* 2013-07-01	0.2.1
	* Grunt 0.3 -> 0.4.1
	* Publish Format Markdown to EPUB.


