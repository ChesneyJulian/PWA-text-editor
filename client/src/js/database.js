import { openDB } from 'idb';

const initdb = async () =>
  openDB('jateDB', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('post to jateDB');
  // open jateDB at version 
  const jateDb = await openDB('jateDB', 1);
  // initialize readwrite transaction within jate
  const tx = jateDb.transaction('jate', 'readwrite');
  // open the transactions object store
  const store = tx.objectStore('jate');
  // use .add method to add content to jate's object store
  const request = store.add({ text: content });
  // await request and respond with results
  const result = await request;
  console.log('Data saved to jateDB', result);
} 

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('get data from jateDB');
  // open jateDB at version
  const jateDb = await openDB('jateDB', 1);
  // create readonly transaction to jate
  const tx = jateDb.transaction('jate', 'readonly');
  // open the transactions object store
  const store = tx.objectStore('jate');
  // use .getAll method to retrieve all data within jate
  const request = store.getAll();
  // await request and respond with results
  const result = await request;

  console.log('data from jateDB', result);
  // extract value from result to send as data in editor.js because codeMirror requires string input
  return result.value;
};

initdb();
