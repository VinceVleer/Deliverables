module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			scripts: {
				files: ['style1.scss'],
				tasks: ['sass'],
			},
		},
		sass: {
			dist: {
			  files: {
				'style1.css': 'style1.scss'
			  }
			}
		  }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['watch']);

};