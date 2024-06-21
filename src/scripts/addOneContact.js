import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
    //reading data
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parsedData = JSON.parse(data);
    console.log('reading completed...');

    //adding new data
    const contact = createFakeContact();
    parsedData.push(contact);
    console.log('contact added...');

    //writing data
    await fs.writeFile(PATH_DB, JSON.stringify(parsedData), 'utf8');
    console.log('writting completed...');
  } catch (error) {
    console.log(error.message);
  }
};

addOneContact();
