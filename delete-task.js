import fs from 'fs/promises';

export default async function deleteTask(order = 0, fileName = null) {
    try {
        const currentFile = fileName ?? 'tasks.csv'
        const fileData = (await fs.readFile(currentFile, 'utf8')).split(/\r?\n/);
        fileData.splice(order, 1);
        const updatedContent = fileData.join('\n');
        await fs.writeFile('tasks.csv', updatedContent, 'utf8');
    }catch (e) {
        console.error(`Error: ${e}`);
    }
}

