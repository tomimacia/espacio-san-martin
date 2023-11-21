import Layout from "@/components/Layouts/Article";
import NoticiaStructure from "@/components/NoticiaStructure";
import { getSingleDoc } from "@/firebase/services/getSingleDoc";
import { MainNoticiaType } from "@/types/types";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

type ServerSideProps = {
  params: {
    NoticiaID: string;
  };
};

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  const resp = await getSingleDoc("Noticias", params.NoticiaID);
  const Noticia = resp?.data();
  const MainNoticia = Noticia?.Main;
  const DateSeconds = Noticia?.Date.seconds;
  return {
    props: {
      MainNoticia,
      DateSeconds,
    },
  };
};

const NoticiaPage = ({ MainNoticia, DateSeconds }: MainNoticiaType) => {
  const { MainIMG, MainTitle } = MainNoticia;
  const { downloadURL } = MainIMG;

  return (
    <Layout hasMetaTags={false} headTitle={MainTitle}>
      <Head>
        <meta property="og:description" content={MainTitle} />
        <meta property="og:image" content={downloadURL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:description" content={MainTitle} />
        <meta name="twitter:image" content={downloadURL} />
      </Head>
      <NoticiaStructure MainNoticia={MainNoticia} DateSeconds={DateSeconds} />
    </Layout>
  );
};

export default NoticiaPage;
