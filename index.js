import fs from 'fs/promises';
import from "./add-task.js";
import {createFile} from "./create-file.js";
// async function openFile(){
//   try {
//     const csvHeaders = 'Task,deadline';
//     await fs.writeFile('tasks.csv', csvHeaders, {encoding: 'utf8'});
//   }catch (err){
//     console.error(err);
//   }
// }
//
// openFile()

// createFile('hunter.csv', 'title, description, created_at, level, deadline')

addTask('moshina olish', '2025.03.03')
addTask('uy olish', '2025.04.03')