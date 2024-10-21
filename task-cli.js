import readline from 'readline'
export default class TaskCli{
     #try_limit = 3;
     #password = 'secret';
     #rl = readline.createInterface({
            input: process.stdin, output: process.stdout
        })
    constructor(){

        this.exitByCommand;
       // this.askPassword
    }

    get askPassword(){
        this.#rl.question("Please enter a  password: ", (answer) => {
            if(this.#try_limit === 0){
               this.waitTenSeconds;
            }else{
                if(answer.trim() !== "" && answer.trim() === this.#password) {
                    console.log('\x1b[32m%s\x1b[0m','You are successfully entered!');
                }else{

                    console.log('\x1b[31m%s\x1b[0m',`Password is incorrect! You have ${this.#try_limit} chances`);
                    this.#try_limit  !== 0 ? this.#try_limit --:'';
                    this.askPassword;
                }
            }

        })
    }
    get waitTenSeconds(){
                this.#rl.pause();
                setTimeout(()=>{
                    this.#rl.resume()
                    this.#try_limit = 1;
                    this.askPassword;
                }, 10000);
    }

    #setPromptAndInvoke(data){
         this.#rl.setPrompt(data);
         this.#rl.prompt();
    }
    get exitByCommand(){
            this.#rl.on('SIGINT', () => {
            this.#rl.question('Exit (y or n)? ', (input) => {
                if (input.match(/^y(es)?$/i)) { this.#rl.close(); }
            });
        });
    }
}