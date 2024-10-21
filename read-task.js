import fs from 'fs/promises';

export default  async  function readTask(fileName = null){
    try {
        const currentFile = fileName ?? 'tasks.csv';
        const fileData  = (await fs.readFile(currentFile, 'utf-8')).split(/\r?\n/);
        let t = 0;
        const humanReadable = fileData.map((value, index) => {
            let current = value.trim().split(',').join(' ');
            if(index === 0){
                current = current.toUpperCase();
                current = `ID ${current}`
            }else{
                current = current.toLowerCase();
                current = `${t} : ${current}`
            }
            t++;
           return current
        });

        console.log(humanReadable.join('\n'));
    }catch (e) {
        console.error(`Error reading task: ${fileName}`);
    }
}

