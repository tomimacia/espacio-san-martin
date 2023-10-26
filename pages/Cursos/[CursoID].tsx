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
  const { downloadURL } = MainIMG;
  const description = `Descubre nuestro curso de ${MainTitle}`;
  return (
    <Layout hasMetaTags={false} headTitle={MainTitle}>
      <Head>
        <meta property="og:description" content={description} />
        <meta property="og:image" itemProp="image" content={downloadURL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={downloadURL} />
      </Head>
      <CursoStructure Curso={Curso} Sedes={Sedes} />
    </Layout>
  );
};

export default CursosPage;
