import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import dynamic from "next/dynamic";
import { FC, ReactNode, useState } from "react";

interface FacialDialogProps {
  Trigger: ReactNode;
}

const FacialRecognitionDialog: FC<FacialDialogProps> = ({
  Trigger,
}): JSX.Element => {
  const WebCamDynamic = dynamic(
    () => import("./../facial-recognition/WebCam"),
    { ssr: false }
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{Trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <WebCamDynamic />
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FacialRecognitionDialog;
