let pwdCommand = function(cmd){
    if (cmd === 'pwd'){
        process.stdout.write(process.cwd());
    }
};

module.exports = {
    pwdCommand
};
