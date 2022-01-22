import React from "react";
import AddForm from "../../components/form/AddForm";
import { useRouter } from "next/router";
import Head from "next/head";

const NewEidetic = () => {
  const router = useRouter();

  const addNew = async (eideticData) => {
    const response = await fetch(`/api/NewEidetic`, {
      method: "POST",
      body: JSON.stringify(eideticData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add new</title>
        <meta
          name="description"
          content="Add a new eidetic which lets everyone relive the moments you had experienced"
        />
      </Head>
      <AddForm newEidetic={addNew} />
    </>
  );
};

export default NewEidetic;
