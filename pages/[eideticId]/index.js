import React from "react";
import DetailCard from "../../components/card/DetailCard";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const eideticDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.eideticData.title}</title>
        <meta name="description" content={props.eideticData.description} />
      </Head>
      <DetailCard
        image={props.eideticData.image}
        title={props.eideticData.title}
        description={props.eideticData.description}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://musabsk:musab123sk@cluster0.hefe7.mongodb.net/eidetic?retryWrites=true&w=majority`
  );
  const db = client.db();
  const eideticsCollections = db.collection("eidetic");
  const eidetics = await eideticsCollections.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking", //false==we have given all meetupid value
    paths: eidetics.map((eidetic) => ({
      params: { eideticId: eidetic._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const eideticId = context.params.eideticId;
  const client = await MongoClient.connect(
    `mongodb+srv://musabsk:musab123sk@cluster0.hefe7.mongodb.net/eidetic?retryWrites=true&w=majority`
  );
  const db = client.db();
  const eideticsCollections = db.collection("eidetic");
  const selectedEidetic = await eideticsCollections.findOne({
    _id: ObjectId(eideticId),
  });
  client.close();

  return {
    props: {
      eideticData: {
        title: selectedEidetic.title,
        image: selectedEidetic.image,
        description: selectedEidetic.description,
        id: selectedEidetic._id.toString(),
      },
    },
  };
};

export default eideticDetails;
