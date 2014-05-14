module.exports = function(grunt) {

  // All configuration goes here
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'nested'
        },
        files: {
          'site/css/main.css' : 'css/global.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['css/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
    }
  });

  // Grunt Plugins to use
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['sass', 'watch']);
};