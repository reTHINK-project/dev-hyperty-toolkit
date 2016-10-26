import Dexie from 'dexie';

const db = new Dexie('cache');

db.version(1).stores({
  objects: 'key,version,value'
});

db.open().catch(console.error);

const storageManager = {
  set: (key, version, value) => {
    console.log(key, version, value);
    return db.objects.put({key:key, version:version, value:value});
  },

  get: (key) => {
    return db.objects.where('key')
      .equals(key)
      .first()
      .then(object => {
        return object.value;
      }).catch(error => {
        return undefined;
      });
  },

  getVersion: (key) => {
    console.log('get version:', key);
    return db.objects.where('key')
      .equals(key)
      .first()
      .then(object => {
        return object.version;
      })
  },

  delete: (key) => {
    return db.objects
      .where('key')
      .equals(key)
      .delete();
  }

};

export default storageManager;
