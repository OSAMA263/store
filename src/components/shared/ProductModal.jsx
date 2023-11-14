import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

export default function ProductModal({ isOpen, onClose }) {

  return (
    <AlertDialog
      isCentered
      motionPreset="slideInTop"
      onClose={onClose}
      isOpen={isOpen}
    >
      <AlertDialogOverlay className="!z-[69999999]">
        <AlertDialogContent>
          <AlertDialogBody>sup</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
