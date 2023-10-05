import CursoStructure from "@/components/Cursos/CursoStructure";
import Layout from "@/components/Layouts/Article";
import { CursosData } from "@/data/CursosData";
import { Curso } from "@/types/types";

export async function getServerSideProps({ query }: any) {
  const { data } = query;
  const Curso = CursosData.filter((c) => data === c.route)[0];

  return { props: { Curso } };
}
const CursoDy = ({ Curso }: Curso) => {
  return (
    <Layout headTitle={Curso.title}>
      <CursoStructure Curso={Curso} />
    </Layout>
  );
};

export default CursoDy;
