module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    uglify: {
      build: {
          files: {
            'public/js/panoramicgallery.min.js' : ['src/tmp/babel_index.js', 'src/js/gallery.js']
          }
      }
    },
    cssmin: {
      build: {
        files: {
          'public/css/styles.min.css' : ['src/css/gallery.css', 'src/css/common.css']
        }
      }
    },
    babel: {
      options: {
          presets: ['babel-preset-es2015']
      },
      dist: {
          files: {
            'src/tmp/babel_index.js' : 'src/js/index.js'
          }
      }
    },
    clean: ['src/tmp'],
    watch: {
      scripts: {
        files: ['src/js/*.js'],
        tasks: [
          'concat:dist'
        ],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['src/css/*.css'],
        tasks: [
          'cssmin:build'
        ],
        options: {
          livereload: true,
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/gallery.js', 'src/js/index.js'],
        dest: 'public/js/panoramicgallery.js',
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', [
    'babel',
    'uglify:build',
    'cssmin:build',
    'clean'
  ]);

  grunt.registerTask('debug', [
    'concat:dist',
  ]);
};