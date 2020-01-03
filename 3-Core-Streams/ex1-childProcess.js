const spawn = require('child_process').spawn;
var ps = spawn('grep', ['potato']); // 1=command, 2=array of args you want to pass it.
ps.stdout.pipe(process.stdout);

ps.stdin.write('cheese\n');
ps.stdin.write('games\n');
ps.stdin.write('carrots\n');
ps.stdin.write('potatoes and carrots\n');
ps.stdin.write('potato\n');
ps.stdin.end();
