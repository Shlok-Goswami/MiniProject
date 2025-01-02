const spawner = require('child_process').spawn;

const python_process = spawner('python', ['./main.py', JSON.stringify([0])]);

python_process.stdout.on('data',(data) =>{

    console.log("python output in js: "+data);
});