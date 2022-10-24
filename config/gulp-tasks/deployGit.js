import ghPages from "gulp-gh-pages";

export const deployGit = () => {
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(ghPages());
}