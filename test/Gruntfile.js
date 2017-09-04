/* jshint node: true */
module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({});

    // Simple HTTP server to host the xirr client
    // Runs on port 8000 by default
    grunt.config('connect', {
        options: {
            base: 'www'
        },
        serve: {}
    });

    grunt.config('copy', {
        js: {
            files: [ { src: '../keycloak-promise.js', dest: 'www/keycloak-promise.js' } ]
        }
    });

    grunt.config('watch', {
        js: {
            files: ['../keycloak-promise.js'],
            tasks: ['copy']
        }
    });

    grunt.registerTask('default', ['copy', 'connect', 'watch']);
};
