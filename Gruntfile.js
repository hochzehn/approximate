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
                banner: '/* <%= pkg.name %> v<%= pkg.version %>\n' +
                ' * Build <%= grunt.template.today("yyyy-mm-dd") %> \n' +
                ' * <%= pkg.repository %> \n' +
                '*/\n'
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
                files: {
                    'dist/approximate.min.js': ['dist/approximate.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('dist', ['clean', 'uglify']);
};
