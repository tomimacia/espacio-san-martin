import React from "react";
import {
  Editable,
  EditablePreview,
  useEditableControls,
  ButtonGroup,
  IconButton,
  Flex,
  Input,
  EditableInput,
  Text,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
type EditableType = {
  startValue: string;
  Title: string;
  name: string;
  refreshKey: () => void;
};
const EditableInputComponent = ({
  startValue,
  refreshKey,
  Title,
  name,
}: EditableType) => {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          aria-label="check-icon-editable"
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label="close-icon-editable"
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="edit-icon-editable"
          size="sm"
          title="Editar"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }

  return (
    <Editable defaultValue={startValue} isPreviewFocusable={false}>
      <Flex align="center">
        <Text minW="25%">{Title}:</Text>
        <EditablePreview fontWeight="bold" />
        {/* Here is the custom input */}
        <Input onChange={refreshKey} name={name} size="sm" as={EditableInput} />
        <EditableControls />
      </Flex>
    </Editable>
  );
};

export default EditableInputComponent;
