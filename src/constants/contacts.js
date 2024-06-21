import path from 'node:path';

const BASE_DIR = path.win32.basename('src');
export const PATH_DB = path.join(BASE_DIR, 'db', 'db.json');

console.log(PATH_DB);
