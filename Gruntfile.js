/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    "regex-replace": {
      index: {
          src: ['source-files/index.php'],
          actions: [ 
            {
              name: 'update version in index.php',
              search: 'Version:     \\d.\\d.\\d',
              replace: 'Version:     <%= target %>',
            }
          ]
      }

      
// source-files/classes/class.php
// source-files/js/script.js
  }

    
  });

  // Load tasks here.
  grunt.loadNpmTasks('grunt-regex-replace');

  // Define aliases here.
  grunt.registerTask('default', 'My default task description', function() {
    grunt.log.writeln( 'This is the default grunt task, create a new task and configure.' );
  });

  // var target = grunt.option('target') || '1.0.0';
  grunt.registerTask('update-version', 'My default task description', function(target) {
    grunt.log.writeln( 'New version will be set to ' + target );
    //grunt.task.run('regex-replace');

  });

};
