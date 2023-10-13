import { useSessionStorage } from "@/hooks/storageHooks/useSessionStorage";
import { Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "../Layouts/Article";
import CursosAdmin from "./Cursos/CursosAdmin";
import Inscripciones from "./Inscripciones/Inscripciones";
import NoticiasAdmin from "./Noticias/NoticiasAdmin";
import PasswordSign from "./PasswordSign";
import SuperUserNav from "./SuperUserNav";
import SedesAdmin from "./Sedes/SedesAdmin";
const SuperUserLayout = () => {
  const [password, setPassword] = useSessionStorage("SUPER_USER_PASSWORD", "");
  const [body, setBody] = useState("Inscripciones");
  return (
    <Layout headTitle="Admin">
      <Flex p={[2, 4, 6, 8]} flexDir="column">
        {password === process.env.NEXT_PUBLIC_SUPERUSER_PWD ? (
          <>
            <SuperUserNav setBody={setBody} body={body} />

            <motion.div
              key={body}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween" }}
            >
              {body === "Inscripciones" && <Inscripciones />}
              {body === "Cursos" && <CursosAdmin />}
              {body === "Noticias" && <NoticiasAdmin />}
              {body === "Sedes" && <SedesAdmin />}
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
