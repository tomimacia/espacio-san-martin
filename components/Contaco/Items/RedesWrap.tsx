import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const RedesWrap = ({ size, gap = 1 }: { size?: number; gap?: number }) => {
  const MainIcons = [
    { Icon: WhatsappIcon, Wrapper: WhatsappShareButton },
    { Icon: FacebookIcon, Wrapper: FacebookShareButton },
    { Icon: TwitterIcon, Wrapper: TwitterShareButton },
  ];
  const secondaryIcons = [
    { Icon: EmailIcon, Wrapper: EmailShareButton },
    { Icon: LinkedinIcon, Wrapper: LinkedinShareButton },
    { Icon: TelegramIcon, Wrapper: TelegramShareButton },
  ];
  const { asPath } = useRouter();
  const URL = `https://www.sanmartinjuancruz.com.ar${asPath}`;

  return (
    <Flex align="center" flexDir="column" gap={gap}>
      <Flex gap={gap} w="80%" justify="space-around">
        {MainIcons.map((icon, ind) => {
          const { Icon, Wrapper } = icon;
          return (
            <Flex key={"Icon" + ind} _hover={{ opacity: 0.7 }}>
              <Wrapper title="Espacio San Martín" url={URL}>
                <Icon
                  style={{ borderRadius: "10px" }}
                  size={size}
                  cursor="pointer"
                />
              </Wrapper>
            </Flex>
          );
        })}
      </Flex>
      <Flex gap={gap} w="80%" justify="space-around">
        {secondaryIcons.map((icon, ind) => {
          const { Icon, Wrapper } = icon;
          return (
            <Flex key={"Icon" + ind} _hover={{ opacity: 0.7 }}>
              <Wrapper title="Espacio San Martín" url={URL}>
                <Icon
                  style={{ borderRadius: "10px" }}
                  size={size}
                  cursor="pointer"
                />
              </Wrapper>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default RedesWrap;
