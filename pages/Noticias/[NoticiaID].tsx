import Layout from "@/components/Layouts/Article";
import NoticiaStructure from "@/components/NoticiaStructure";
import { getSingleDoc } from "@/firebase/services/getSingleDoc";
import { MainNoticiaType } from "@/types/types";
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
  const { MainBody, MainIMG, MainImgFooter, MainSubtitle, MainTitle } =
    MainNoticia;
  return (
    <Layout headTitle={MainTitle}>
      <Head>
        <meta property="og:description" content={MainTitle} />
        <meta property="og:image" content={MainIMG.downloadURL} />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>
      <NoticiaStructure
        title={MainTitle}
        DateSeconds={DateSeconds}
        subtitle={MainSubtitle}
        description={MainBody}
        imageFooter={MainImgFooter}
        img={MainIMG.downloadURL}
      />
    </Layout>
  );
};

export default NoticiaPage;
