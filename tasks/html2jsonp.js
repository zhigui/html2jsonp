/*
 * grunt-html2jsonp
 * https://github.com/zhigui/html2jsonp
 *
 * Copyright (c) 2013 ZhiguiChan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {


  grunt.registerMultiTask('html2jsonp', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      callbackName:"appendTemplate",
      //punctuation: ');',
      separator: '\n '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      //src += options.punctuation;
      var result =options.callbackName+'('+ JSON.stringify(src)+')';
      // Write the destination file.
      grunt.file.write(f.dest, result);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
