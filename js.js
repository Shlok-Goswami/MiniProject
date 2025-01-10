const spawner = require('child_process').spawn;

const python_process = spawner('python', ['./main.py', JSON.stringify([0])]);

function copy(arr){
    let ans=[];
    let i=0;
     arr.forEach(e => {
        ans.push(e);
    });
    return ans;
}
let arr=[];
python_process.stdout.on('data',(data) =>{

    data=(data+"").split(',');
    arr=copy(data);
});
let myInterval = setInterval(myFunc,100)



function myFunc(){
    if(arr[0]!=undefined){
        console.log("python output in js: index = ("+arr[0]+","+arr[1]+")  middle = ("+arr[2]+","+arr[3]+")");
    }
}
