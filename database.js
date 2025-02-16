// HsCaglurgmlpGVwe : password

const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://Sarvesh:HsCaglurgmlpGVwe@clusterzero.7m1ad.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected Successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  //   const data = {
  //     first_name: "Amit",
  //     last_name: "Ankit",
  //     age: "26",
  //     location: "gkp",
  //   };

  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Inserted documents =>", insertResult);

  //   const findResult = await collection.find({}).toArray();
  //   console.log("Found documents =>", findResult);

  // const countResult = await collection.countDocuments({});
  // console.log("count of documents in the user collection =>", countResult);

  const result = await collection.find({ first_name: "Amit" }).toArray();
  console.log("result =>", result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
