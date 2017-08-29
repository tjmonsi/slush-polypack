const gulp = require('gulp')
const del = require('del')
const runSequence = require('run-sequence')
const markdox = require('gulp-markdox')
const rename = require('gulp-rename')
const fs = require('fs')

gulp.task('clean-docs', () => {
  return del('./docs')
})

gulp.task('default', (done) => {
  runSequence(
    'clean-docs',
    'create-docs',
    'create-table-of-contents',
    done
  )
})

gulp.task('create-docs', () => {
  return gulp.src('./tasks/**/*.js')
    .pipe(markdox.parse())
    .pipe(markdox.format())
    .pipe(markdox.render({}))
    .pipe(rename(function (path) {
      path.extname = '.md'
    }))
    .pipe(gulp.dest('./docs'))
})

gulp.task('create-table-of-contents', (done) => {
  const folders = fs.readdirSync(__dirname + '/docs/tasks')

  var string = '# Table of Contents\n\n'

  folders.forEach((folder) => {
    const files = fs.readdirSync(__dirname + '/docs/tasks/' + folder)

    string += `## ${folder}\n\n`

    files.forEach((file) => {
      string += `- [${file}](./tasks/${folder}/${file}.md)\n`
    })

    string += `\n`
  })

  string = string.trim()

  fs.writeFileSync('./docs/README.md', string, 'utf8')
  done()
})

gulp.task('watch', (done) => {
  runSequence(
    'default',
    'watch-build',
    done
  )
})

gulp.task('watch-build', () => {
  gulp.watch('./tasks/**/*.js', ['default'])
})
