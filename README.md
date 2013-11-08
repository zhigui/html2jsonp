# grunt-html2jsonp

> html2jsonp contact html template files and out put to a js file with jsonp format. So you don't need to write html template in one line complex and can accross domain to use it.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html2jsonp --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html2jsonp');
```

## The "html2jsonp" task

### Overview
In your project's Gruntfile, add a section named `html2jsonp` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html2jsonp: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.separator
Type: `String`
Default value: `' \n  '`

A string value that is used to separate every template clearly.

#### options.callbackName
Type: `String`
Default value: `'appendTemplate'`

This string value is jsonp callback function name.

### Usage Examples
This example contact html template files and out put to a js file with jsonp format.

```js
grunt.initConfig({
  html2jsonp: {
    options: {
      callbackName:"appendTemplate",
      separator: '\n'
    },
    files: {
      'teml.js': ['*.html'],
    },
  },
})
```


## Release History
_(Nothing yet)_
