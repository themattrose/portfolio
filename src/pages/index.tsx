import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "@/components/Layout";
import { Home } from "@/features/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matt Rose</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
