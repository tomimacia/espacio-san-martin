import { Button, Flex, FormLabel, Image, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, useRef } from "react";

type AddImagesProps = {
  images: File | null;
  setImages: React.Dispatch<React.SetStateAction<any>>;
  id: string;
};

const AddImages: React.FC<AddImagesProps> = ({ images, setImages, id }) => {
  const imageRef = useRef<HTMLInputElement | null>(null);

  const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setImages(selectedFiles[0]);
    }
  };

  return (
    <Flex gap={2} align="center">
      <FormLabel>Imagen</FormLabel>
      <Flex display="inline-block" flexDir="column">
        <Flex>
          <FormLabel htmlFor={`file${id}`}>
            <Flex>
              <Text
                cursor="pointer"
                p={1}
                borderRadius="5px"
                bgColor="gray.300"
                _hover={{ color: "white", bgColor: "brandLight" }}
              >
                Elegir imagen
              </Text>
            </Flex>
            <Input
              pt={1}
              display="none"
              id={`file${id}`}
              accept="image/*"
              type="file"
              ref={imageRef}
              onChange={onChangeImg}
              name="Img"
            />
          </FormLabel>
          {images && (
            <Button
              size="sm"
              onClick={() => setImages(null)}
              ml={5}
              bgColor="blue.300"
            >
              Borrar Imagen
            </Button>
          )}
        </Flex>
        {images && (
          <Image
            alt=""
            height="180px"
            maxHeight="180px"
            width="180px"
            maxWidth="180px"
            src={URL.createObjectURL(images)}
            objectFit="cover"
          />
        )}
      </Flex>
    </Flex>
  );
};

export default AddImages;
