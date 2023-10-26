import CursoStructure from "@/components/Cursos/CursoStructure";
import Layout from "@/components/Layouts/Article";
import NoticiaStructure from "@/components/NoticiaStructure";
import { getSingleDoc } from "@/firebase/services/getSingleDoc";
import { CursoSede, MainCursoType, MainNoticiaType } from "@/types/types";
import Head from "next/head";

type ServerSideProps = {
  params: {
    CursoID: string;
  };
};

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  const resp = await getSingleDoc("Cursos", params.CursoID);
  const CursoData = resp?.data();
  const Curso = CursoData?.Main;
  const Sedes = CursoData?.Sedes;
  return {
    props: {
      Curso,
      Sedes,
    },
  };
};

const CursosPage = ({
  Curso,
  Sedes,
}: {
  Curso: MainCursoType;
  Sedes: CursoSede[];
}) => {
  const { MainTitle, MainIMG } = Curso;
  return (
    <Layout hasMetaTags={false} headTitle={MainTitle}>
      <Head>
        <meta property="og:description" content={MainTitle} />
        <meta
          property="og:image"
          itemProp="image"
          content={
            MainIMG.downloadURL ||
            "https://www.sanmartinjuancruz.com.ar/LogoNavbar.jpg"
          }
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
      </Head>
      <CursoStructure Curso={Curso} Sedes={Sedes} />
    </Layout>
  );
};

export default CursosPage;
