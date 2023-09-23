import Layout from "@/components/Layouts/Article";
import PasswordSign from "@/components/SuperUser/PasswordSign";
import UserTable from "@/components/SuperUser/UserTable";
import { useSessionStorage } from "@/hooks/storageHooks/useSessionStorage";
import { Flex, Heading } from "@chakra-ui/react";

const SuperUser = () => {
  const [password, setPassword] = useSessionStorage("SUPER_USER_PASSWORD", "");

  return (
    <Layout headTitle="Admin">
      <Flex p={[2, 4, 6, 8]} flexDir="column">
        <Heading py={7}>Panel de Administración</Heading>
        {password === process.env.NEXT_PUBLIC_SUPERUSER_PWD ? (
          <UserTable />
        ) : (
          <PasswordSign setPassword={setPassword} />
        )}
      </Flex>
    </Layout>
  );
};

export default SuperUser;
