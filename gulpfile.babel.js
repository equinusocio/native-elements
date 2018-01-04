import gulp from 'gulp';
import gulpStats from 'gulp-stats';
import clean from './.gulp/tasks/clean';
import postcss from './.gulp/tasks/postcss';
import build from './.gulp/tasks/build';

// Use gulp-stats
// gulpStats(gulp);

// set default task
export default build;