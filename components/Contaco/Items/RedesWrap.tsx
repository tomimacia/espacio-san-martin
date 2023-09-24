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
  const IconList = [
    { Icon: WhatsappIcon, Wrapper: WhatsappShareButton },
    { Icon: FacebookIcon, Wrapper: FacebookShareButton },
    { Icon: TwitterIcon, Wrapper: TwitterShareButton },
    { Icon: EmailIcon, Wrapper: EmailShareButton },
    { Icon: LinkedinIcon, Wrapper: LinkedinShareButton },
    { Icon: TelegramIcon, Wrapper: TelegramShareButton },
  ];
  const URL = "https://www.sanmartinjuancruz.com.ar/";
  return (
    <Flex flexWrap="wrap" gap={gap}>
      {IconList.map((icon, ind) => {
        const { Icon, Wrapper } = icon;
        return (
          <Flex key={"Icon" + ind} _hover={{ opacity: 0.7 }}>
            <Wrapper url={URL}>
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
  );
};

export default RedesWrap;
