module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            public: {
                // have to use public/* instead of just public because this dir is mounted into docker container.
                // removing the whole dir leaves docker container in a messed up state.
                src: ["dist/*"]
            }
        },

        uglify: {
            options: {
                banner: '/* <%= pkg.name %> v<%= pkg.version %> <%= pkg.repository %> */\n'
            },
            pretty: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: {
                    'dist/approximate.js': ['src/**/*.js']
                }
            },
            minified: {
                options: {
                    compress: {
                        drop_console: true
                    }
                },
                files: {
                    'dist/approximate.min.js': ['dist/approximate.js']
                }
            }
        },

        "regex-replace": {
            "console.log": {
                src: ['dist/approximate.js'],
                actions: function() {
                    return [
                        {
                            name: 'remove console.log',
                            search: 'console.log',
                            replace: '// console.log'
                        }
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-regex-replace');

    grunt.registerTask('dist', ['clean', 'uglify', 'regex-replace']);
};
