import Layout from "@/components/Layouts/Article";
import NoticiaStructure from "@/components/NoticiaStructure";
import { NoticiasData } from "@/data/NoticiasData";
import { NoticiaType } from "@/types/types";

export async function getServerSideProps({ query }: any) {
  const { data } = query;
  const Noticia = NoticiasData.filter((c) => data === c.route)[0];

  return { props: { Noticia } };
}
const Noticias = ({ Noticia }: NoticiaType) => {
  const { title, description, img, imageFooter, route, subtitle } = Noticia;

  return (
    <Layout headTitle={route}>
      <NoticiaStructure
        title={title}
        subtitle={subtitle}
        description={description}
        imageFooter={imageFooter}
        route={route}
        img={img}
      />
    </Layout>
  );
};

export default Noticias;
