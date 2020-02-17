import Simulator from './Simulator/Simulator';
// import HealthyHumanEntity from './HumanEntity/HealthyHumanEntity';
import InputListener from './Simulator/InputListener';


const simulator = new Simulator(new InputListener());

simulator.start();



// // const exec = require('child_process').exec;
// // const cmd = `node ${process.env.ENVIRONMENT === 'babel' ? 'src' : 'build'}/App.${process.env.ENVIRONMENT === 'babel' ? 'ts' : 'js'}`
// // console.log('exec: ' + cmd);
// // exec(cmd, function(error, stdout, stderr){
// //   console.log(error, stdout, stderr);
// // });
// import * as sourceMap from 'source-map-support';
// import child_process from 'child_process';

// sourceMap.install();
// var editor = process.env.EDITOR || 'npm';

// var child = child_process.spawn(editor, [ 'run', 'babel:dev' ], {
//   env: process.env,

// });

// child.on('exit', function (e, code) {
//     console.log("finished build");

//     // var node = process.env.EDITOR || 'node';

//     // var app_child = child_process.spawn(node, ['build/App.js'], {
//     //   stdio: 'inherit',
//     //   env: process.env,
//     // });

//     // app_child.on('exit', function(e, code) {
//     //   console.log(e, code, 'fechou')
//     // })
// });