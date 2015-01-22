module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            all: {
                options: {
                    style: "compact",
                    sourcemap: "none"
                },
                files: [{
                    expand: true,
                    cwd: "scss/",
                    src: ["*.scss"],
                    dest: "css/",
                    ext: ".css"
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");

    grunt.registerTask("default", ["sass"]);
};
