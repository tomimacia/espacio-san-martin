import Cooperativista from '@/components/Cooperativista';
import FinesCartel from '@/components/Inicio/FinesCartel';
import IntroJuan from '@/components/Inicio/IntroJuan';
import Noticias from '@/components/Inicio/Noticia';
import TitleIndex from '@/components/Inicio/TitleIndex';
import Layout from '@/components/Layouts/Article';
import RefSpan from '@/components/RefSpan';

import { Flex } from '@chakra-ui/react';
export default function Home() {
  return (
    <Layout headTitle='Inicio'>
      <TitleIndex />
      <RefSpan id='cooperativistas' height='120px' />
      <Cooperativista />
      <RefSpan id='fines' height='120px' />
      <FinesCartel />
      <IntroJuan />
      <Flex p={5} my={[8, 12, 16, 20]}>
        <Noticias />
      </Flex>
    </Layout>
  );
}
