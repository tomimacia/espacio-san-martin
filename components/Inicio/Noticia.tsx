import destructureDate from "@/helpers/destructureDate";
import useGetNoticias from "@/hooks/dataHandler/useGetNoticias";
import { NoticiaIntroType } from "@/types/types";
import { Button, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { Fragment } from "react";
import { useInView } from "react-intersection-observer";

const Noticias = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const { noticias, loadingNoticias } = useGetNoticias();

  return (
    <Flex ref={ref} gap={10} flexDir="column" justify="space-around">
      <Heading as="h3">Novedades</Heading>
      {!loadingNoticias &&
        noticias
          .sort((a, b) => a.Date.seconds - b.Date.seconds)
          .reverse()
          .map((noticia: any, ind) => {
            const { Card } = noticia;
            return (
              <motion.div
                initial="hidden"
                key={noticia.Card.CardTitle}
                animate={inView ? "visible" : ""}
                variants={variants}
                transition={{ duration: 2, delay: ind / 4 }}
              >
                <Noticia noticia={Card} id={noticia.id} Date={noticia.Date} />
              </motion.div>
            );
          })}
    </Flex>
  );
};
export const Noticia = ({ noticia, id, Date }: NoticiaIntroType) => {
  const { CardTitle, CardIMG, CardIntro } = noticia;
  return (
    <Flex
      border="1px solid #C4C4C4"
      borderRadius="10px"
      p={[1, 2, 3, 4]}
      flexDir="column"
      bg="blackAlpha.200"
      gap={3}
    >
      <Heading p={1} size="lg">
        {CardTitle}
      </Heading>
      <Divider />
      <Text>{destructureDate(Date?.seconds || 0)}</Text>
      <Flex flexDir={{ base: "column", md: "row" }} gap={3}>
        <Text fontSize={18}>
          {CardIntro.map((t, ind) => {
            return (
              <Fragment key={ind + "texto"}>
                {t}
                <br />
              </Fragment>
            );
          })}
        </Text>
        <Image
          objectFit="contain"
          w={200}
          h={200}
          alt={CardTitle}
          src={CardIMG.downloadURL}
        />
      </Flex>
      <Button
        as={Link}
        href={{
          pathname: `/Noticias/${id}`,
        }}
        shallow={true}
        alignSelf="center"
        size="sm"
        bg="blue.400"
      >
        Ver más
      </Button>
    </Flex>
  );
};

export default Noticias;
