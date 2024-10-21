import fs from 'fs/promises';

export default async function deleteFile(dir) {
    try {
        await fs.unlink(dir);
    }catch (e) {
        console.error(`Error while deleting file: ${dir}`);
    }
}

deleteFile('tasks.csv')