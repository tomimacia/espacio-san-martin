import { useSessionStorage } from '@/hooks/storageHooks/useSessionStorage';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '../Layouts/Article';
import CooperativistasAdmin from './Cooperativistas/CooperativistasAdmin';
import CursosAdmin from './Cursos/CursosAdmin';
import FinesAdmin from './Fines/FinesAdmin';
import Inscripciones from './Inscripciones/Inscripciones';
import NoticiasAdmin from './Noticias/NoticiasAdmin';
import PasswordSign from './PasswordSign';
import SedesAdmin from './Sedes/SedesAdmin';
import SuperUserNav from './SuperUserNav';

const SuperUserLayout = () => {
  const [password, setPassword] = useSessionStorage('SUPER_USER_PASSWORD', '');
  const [body, setBody] = useState('Inscripciones');
  return (
    <Layout headTitle='Admin'>
      <Flex mt={5} p={[2, 4, 6, 8]} flexDir='column' w='100%'>
        {password === process.env.NEXT_PUBLIC_SUPERUSER_PWD ? (
          <>
            <SuperUserNav setBody={setBody} body={body} />

            <motion.div
              key={body}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'tween' }}
            >
              {body === 'Inscripciones' && <Inscripciones />}
              {body === 'Cursos' && <CursosAdmin />}
              {body === 'Noticias' && <NoticiasAdmin />}
              {body === 'Sedes' && <SedesAdmin />}
              {body === 'Coope' && <CooperativistasAdmin />}
              {body === 'Fines' && <FinesAdmin />}
            </motion.div>
          </>
        ) : (
          <PasswordSign setPassword={setPassword} />
        )}
      </Flex>
    </Layout>
  );
};

export default SuperUserLayout;
