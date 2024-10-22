import readline from 'readline'
import colors from './colors.js'
import readTask from "./read-task.js";
import createFile from "./create-file.js";
import addTask from "./add-task.js";
import commands from "./commands.js";
import updateTask from "./update-task.js";
import deleteTask from "./delete-task.js";
export default class TaskCli{
     #current_interval;
     #try_limit = 3;
     #password = 'secret';
     #rl = readline.createInterface({
            input: process.stdin, output: process.stdout
        })
    constructor(){
         createFile();
         this.askPassword;
    }

    get askPassword(){
        this.#rl.question("Please enter a  password: ", (answer) => {
            if(this.#try_limit === 0){
               this.waitTenSeconds;
            }else if(answer.trim() !== "" && answer.trim() === this.#password) {
                console.log(`${colors.txt.green} You are successfully entered! ${colors.reset}`);
                this.mainMenu;
            }
            else{
                console.log(`${colors.txt.red} Password is incorrect! You have ${this.#try_limit} chances ${colors.reset}`);
                this.#try_limit  !== 0 ? --this.#try_limit:'';
                this.askPassword;
            }


        })
    }
    get waitTenSeconds(){
            this.#rl.pause();
            this.#createInterval;
            setTimeout(()=>{
                this.#rl.resume()
                this.#try_limit = 1;
                this.#clearInterval
                this.askPassword;
            }, 11000);
    }
    get #createInterval(){
         let t = 10
         this.#current_interval = setInterval(()=>{
             this.#setPromptAndInvoke(`You can enter password after ${t}:seconds`)
             t--;
         }, 1000)
    }
    get #clearInterval(){
         clearInterval(this.#current_interval);
    }
    #setPromptAndInvoke(data){
         this.#rl.setPrompt(`${colors.bg.red} ${data} ${colors.reset}`);
         this.#rl.prompt();
    }
    get exitByCommand(){
            this.#rl.on('SIGINT', () => {
            this.#rl.question('Exit (y or n)? ', (input) => {
                if (input.match(/^y(es)?$/i)) { this.#rl.close(); }
            });
        });
    }
    get mainMenu(){
         this.#rl.on('line', (line) => {
             const command = line.trim().split(",");
             if(!(command[0] in commands)){
                 console.log()
                 Object.entries(commands).forEach(([key, value]) => {
                      console.log(`${colors.txt.blue} ${key} => ${value} ${colors.reset}`);
                 })
             }
             if(line.trim() === "exit"){
                 this.#rl.close();
             }

             if(command[0] === "select"){
                 readTask();
             }
             if(command[0] === "create"){
                 addTask(command[1], command[2]);
                 console.log(`${colors.txt.green} successfully added new task! ${colors.reset}`);
             }
             if(command[0] === "update"){
                 const updates = command[1] +","+command[2];
                 updateTask(updates, parseInt(command[3]));
                 console.log(`${colors.txt.green} successfully updated! ${colors.reset}`);
             }
             if(command[0] === "delete"){
                 deleteTask(parseInt(command[1]));
                 console.log(`${colors.txt.green} successfully deleted! ${colors.reset}`);
             }
         })
    }
}