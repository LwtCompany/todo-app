import fs from 'fs/promises';

export async function createFile(filePath, headers) {
    try {
        await fs.appendFile(filePath, headers, 'utf-8');
    }catch (e) {
        console.error(`Error while create new file :  ${e}`);
    }
}