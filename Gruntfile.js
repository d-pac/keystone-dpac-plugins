"use strict";
module.exports = function( grunt ){
  // Show elapsed time at the end
  require( "time-grunt" )( grunt );
  // Load all grunt tasks
  require( "jit-grunt" )( grunt, {
  } );

  var paths = {
    source : [ "index.js", "lib/**/*.js" ],
    tests  : [ "test/**/*.js" ]
  };

  grunt.initConfig( {
    jshint : {
      options   : {
        jshintrc : ".jshintrc",
        reporter : require( "jshint-stylish" )
      },
      gruntfile : {
        src : [ "Gruntfile.js" ]
      },
      source        : {
        src : paths.source
      },
      test      : {
        src : paths.tests
      }
    },

    jscs : {
      options : {
        config : ".jscsrc"
      },
      source  : {
        src : paths.source
      },
      test    : {
        src : paths.tests
      }
    }

  } );

  grunt.registerTask( "lint", [ "jshint", "jscs" ] );

  grunt.registerTask( "default", [ "lint" ] );
};
