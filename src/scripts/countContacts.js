import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data).length;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

console.log(await countContacts());
