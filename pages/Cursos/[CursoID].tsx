import CursoStructure from "@/components/Cursos/CursoStructure";
import Layout from "@/components/Layouts/Article";
import NoticiaStructure from "@/components/NoticiaStructure";
import { getSingleDoc } from "@/firebase/services/getSingleDoc";
import { CursoSede, MainCursoType, MainNoticiaType } from "@/types/types";

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
  const { MainTitle } = Curso;
  return (
    <Layout headTitle={MainTitle}>
      <CursoStructure Curso={Curso} Sedes={Sedes} />
    </Layout>
  );
};

export default CursosPage;
