const { MongoClient } = require("mongodb");
const mongoClient = new MongoClient(process.env.MONGODB_URI);
const clientPromise = mongoClient.connect();

const handler = async (event) => {
    const { httpMethod, body } = event;
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    
    if (httpMethod === 'GET') {
      const results = await collection.find().toArray();
      return {
        statusCode: 200,
        body: JSON.stringify(results),
      }
    } else if (httpMethod === 'POST') {
      await collection.insertOne(JSON.parse(body));
      return {
        statusCode: 201,
        body: body,
      }
    } else {
      return {
        statusCode: 500
      }
    }
};

module.exports = { handler };
