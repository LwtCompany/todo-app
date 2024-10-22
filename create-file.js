import fs from 'fs/promises';

export default async function createFile(filePath, headers) {
    const currentFile = filePath ?? 'tasks.csv'
    try {
        await fs.access(currentFile);
        console.log('\nFile already exists.\n');
    }catch (e) {
        if(e.code === 'ENOENT') {
             console.log('\nFile does not exist, creating it...\n');
             await fs.appendFile(filePath, headers, 'utf-8');
             console.log('\nFile created successfully.\n');
        }else{
             console.error('\nError while checking the file:', e);
        }
    }
}