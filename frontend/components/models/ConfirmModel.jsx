import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ConfirmModel = ({
  isOpen = false,
  onClose,
  title,
  body,
  onConfirm,
  confirmText,
  cancelText,
}) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{body}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onConfirm}>
              {confirmText}
            </Button>
            <Button variant="ghost">{cancelText}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ConfirmModel;
