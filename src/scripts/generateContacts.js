import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    //reading data
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parsedData = JSON.parse(data);
    console.log('reading completed...');

    //adding new data
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      parsedData.push(contact);
      console.log(`${i + 1} contact added...`);
    }

    //writing data
    await fs.writeFile(PATH_DB, JSON.stringify(parsedData), 'utf-8');
    console.log('writting completed...');
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

generateContacts(5);
