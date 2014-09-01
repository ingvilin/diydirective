module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.initConfig({
   connect: {
    server: {
      options: {
        port: 9090,
        base: '.'
      }
    }
  },

  open : {
    dev : {
      path: 'http://localhost:9090',
      app: 'Google Chrome'
    }
  },

   watch: {
    files: ['*.js']
  }
})

  grunt.registerTask('default', ['connect', 'open', 'watch']);

  grunt.registerTask('server', ['connect', 'open', 'watch']);

};