import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

export default function Modal({ isOpen, onClose, children }) {
  return (
    <AlertDialog
      isCentered
      motionPreset="slideInTop"
      onClose={onClose}
      isOpen={isOpen}
    >
      <AlertDialogOverlay className="!z-[69999999]">
        <AlertDialogContent maxH="900px" maxW="1100px">
          {children}
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
