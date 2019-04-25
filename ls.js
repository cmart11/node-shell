let fs = require('fs');

let lsCmd = () => {
    fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
        throw err;
    } else {
        process.stdout.write(files.join('\n'));
        process.stdout.write('prompt > ');
    }

    });
};

module.exports = {
    lsCmd
}
