import TaskCli from "./task-cli.js";

const taskCli = new TaskCli();

// class MyCli {
//     constructor(options) {
//
//     }
// }
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.on("line", (line) => {
//     if(line.trim() === "exit") {
//         rl.close()
//         // process.exit();
//     }
//     console.log(line);
// });

// const wrongPassword = () => {
//     return rl.question("Please try again: ", (answer) => {
//       if(answer.trim() !== "" && answer.trim() === "admin") {
//         rl.write('you are successfully entered!');
//     }else{
//         rl.write('wrong password');
//         return wrongPassword();
//         }
//     });
// }
// rl.question("Please enter the password: ", (answer) => {
//     if(answer.trim() !== "" && answer.trim() === "admin") {
//         console.log('\x1b[32m%s\x1b[0m','you are successfully entered!');
//     }else{
//        console.log('\x1b[31m%s\x1b[0m','wrong password');
//         wrongPassword();
//     }
// })