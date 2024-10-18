import { MongoClient } from 'mongodb';

const url = process.env.CONNECTION_STRING;
let connectDB: Promise<MongoClient>;

if (url) {
  if (process.env.NODE_ENV === 'development') {
    const globalWithMongoClientPromise = global as typeof globalThis & {
      _mongo: Promise<MongoClient>;
    };

    if (!globalWithMongoClientPromise._mongo) {
      globalWithMongoClientPromise._mongo = new MongoClient(url).connect();
    }
    connectDB = globalWithMongoClientPromise._mongo;
  } else {
    connectDB = new MongoClient(url).connect();
  }
}

export { connectDB };
