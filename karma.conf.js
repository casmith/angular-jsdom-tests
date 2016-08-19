'use strict';

module.exports = function (config) {
    config.set({
        basePath: '',
        browserNoActivityTimeout: 20000,
        
        frameworks: ['browserify', 'jasmine'],

		files: [
            {
                pattern: 'src/main.js',
                watched: true,
                included: false,
                served: false
            },
            {
                pattern: 'test/index.js',
                watched: true,
                included: true,
                served: true
            }
        ],
        exclude: [],
		preprocessors: {
            'src/**/*.js': [
                'browserify'
            ],
            'test/index.js': [
                'browserify'
            ]
        },
        reporters: [
            'progress',
        ],
        port: 9876,
        colors: true,
        autoWatch: true,
        browsers: ['jsdom'],
        singleRun: false,
        browserify: {
            watch: true,
            debug: true,
            transform: ['browserify-shim'],
            global: true
        }
    });
};
