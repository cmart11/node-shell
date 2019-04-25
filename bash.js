const pwdModule = require('./pwd');

const lsModule = require('./ls');

//console.log('pwdMod ', pwdModule());
process.stdout.write('prompt');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd'){
        pwdModule.pwdCommand(cmd);
    } else if (cmd === 'ls'){
        lsModule.lsCmd();
    } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    }

});
