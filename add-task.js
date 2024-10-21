import fs from 'fs/promises'
export default async function addTask(task, deadline, fileName = null) {
    try {
        const currentFile = fileName ??  'tasks.csv';
        const content = ` \n ${task},${deadline}`
        await fs.writeFile(currentFile, content, {flag: 'a'})
    }catch (e) {
        console.error(`Error happened while adding task : ${e}`)
    }
}