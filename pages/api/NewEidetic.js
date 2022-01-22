import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    //   const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      `mongodb+srv://musabsk:musab123sk@cluster0.hefe7.mongodb.net/eidetic?retryWrites=true&w=majority`
    );
    const db = client.db();
    const eideticCollections = db.collection("eidetic");
    const result = await eideticCollections.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "eidetic inserted !" });
  }
};

export default handler;
