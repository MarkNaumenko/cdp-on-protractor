var gulp = require('gulp'),
  runSequence = require('run-sequence'),
  protractor = require('gulp-protractor').protractor,
  util = require('gulp-util'),
  exec = require('child-process-promise').exec;

//gulp test --browser=chrome --view=mobile

gulp.task('test',function(){
  process.env.BROWSER = util.env.browser || 'chrome';
  process.env.VIEW = util.env.view || 'desktop';

  return exec('gulp protractor')
  .then(function (results) {
    console.log(results.stdout);
  })
  .catch(function (err) {
    console.error('ERROR: ',err.stdout);
  });
});

gulp.task('protractor', function() {

  switch(process.env.VIEW) {
    case "desktop":
      process.env.VIEW = '--window-size=360,640';
      break;
    case "mobile":
      process.env.VIEW = '--window-size=1280,720';
      break;
    default :
      process.env.VIEW = '--window-size=1280,720';
      break
  }

  process.env.BROWSER = 'chrome';

  console.log(process.env.BROWSER);
  console.log(process.env.VIEW);

  return gulp.src(['./*/*.js'])
  .pipe(
    protractor({
      'configFile': "protractor.conf.js"
    })
  );
});