import Mainhome from "../components/home/Mainhome";
import Container from "@mui/material/Container";
import { MongoClient } from "mongodb";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Eidetic</title>
        <meta name="description" content="A place where you share your memories and express feelings." />
      </Head>
      <Mainhome carddata={props.eidetics} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://musabsk:musab123sk@cluster0.hefe7.mongodb.net/eidetic?retryWrites=true&w=majority`
  );
  const db = client.db();
  const eideticsCollections = db.collection("eidetic");
  const eidetics = await eideticsCollections.find().toArray();
  client.close();

  return {
    props: {
      eidetics: eidetics.map((eidetic) => ({
        id: eidetic._id.toString(),
        title: eidetic.title,
        image: eidetic.image,
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
