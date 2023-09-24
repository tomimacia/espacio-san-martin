import { Flex } from "@chakra-ui/react";
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

  const URL = "https://www.sanmartinjuancruz.com.ar";
  return (
    <Flex flexDir="column" gap={gap}>
      <Flex gap={1} flexWrap="wrap">
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
      <Flex gap={1} flexWrap="wrap">
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
