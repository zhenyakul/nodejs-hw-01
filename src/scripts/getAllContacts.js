import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    return await fs.readFile(PATH_DB, 'utf8');
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

console.log(await getAllContacts());
