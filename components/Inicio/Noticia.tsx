import destructureDate from "@/helpers/destructureDate";
import useGetNoticias from "@/hooks/dataHandler/useGetNoticias";
import { NoticiaIntroType } from "@/types/types";
import { Button, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { Fragment } from "react";
import { useInView } from "react-intersection-observer";

const Noticias = () => {
  const { noticias, loadingNoticias } = useGetNoticias();

  return (
    <Flex gap={10} flexDir="column" justify="space-around">
      <Heading as="h3">Novedades</Heading>
      {!loadingNoticias &&
        noticias
          .sort((a, b) => a.Date.seconds - b.Date.seconds)
          .reverse()
          .map((noticia: any, ind) => {
            const { Card } = noticia;
            return (
              <Noticia
                key={Card.CardTitle + ind}
                noticia={Card}
                ind={ind}
                id={noticia.id}
                Date={noticia.Date}
              />
            );
          })}
    </Flex>
  );
};
export const Noticia = ({ noticia, id, Date, ind }: NoticiaIntroType) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const { CardTitle, CardIMG, CardIntro } = noticia;
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : ""}
      variants={variants}
      transition={{ duration: 2, delay: ind / 4 }}
    >
      <Flex
        ref={ref}
        border="1px solid #C4C4C4"
        borderRadius="10px"
        p={[1, 2, 3, 4]}
        flexDir="column"
        bg="blackAlpha.200"
        gap={3}
      >
        <Heading p={2} size="lg">
          {CardTitle}
        </Heading>
        <Divider />
        <Text p={1}>{destructureDate(Date?.seconds || 0)}</Text>
        <Flex flexDir={{ base: "column", md: "row" }} gap={3}>
          <Text p={2} fontSize={[15, 16, 17, 18]}>
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
            style={{ alignSelf: "center", borderRadius: "10px" }}
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
    </motion.div>
  );
};

export default Noticias;
