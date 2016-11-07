const gulp = require('gulp');
const propeller = require('gulp-propeller');
const propellersp = require('../src/propeller-sharepoint.js');

gulp.task('default', function(){

  // add sharepoint deployer to propeller
  propeller.extend(propellersp);

  // deploy to 'o365' environment
  propeller.deploy('o365');

});
