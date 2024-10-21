import fs from 'fs/promises';

export default async function updateTask(data, order, fileName = null) {
    try {
           const currentFile = fileName ??  'tasks.csv';
           const fileData = (await fs.readFile(currentFile, 'utf-8')).split(/\r?\n/);
           fileData[order] = data;
           const updatedContent = fileData.join('\n');
           await fs.writeFile('tasks.csv', updatedContent , "utf-8");

    }catch (e) {
        console.error(`Error updating task: ${e}`);
    }
}

