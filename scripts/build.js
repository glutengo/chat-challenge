const child_process = require('child_process');

child_process.execSync('yarn build', {cwd: 'frontend'});
child_process.execSync('cp -R frontend/build/* backend/src/main/resources/static');
child_process.execSync('mvn package', {cwd: 'backend'});
