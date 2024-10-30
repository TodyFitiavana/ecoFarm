import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useFacial from "@/hooks/useFacial";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FC, Fragment, ReactNode, useState } from "react";

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
  const { isReady } = useFacial();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{Trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[445px] h-[470px] p-0">
        {isReady ? (
          <Fragment>
            <div className="p-7 pt-8 absolute w-full h-full">
              <WebCamDynamic />
            </div>
            <DialogHeader className=" p-6 h-full flex items-center justify-end">
              <DialogTitle className="relative z-30">
                <span className="text-white text-shadow flex gap-3 items-center pb-4">
                  <Image
                    src="/icons/facial-recognition_white.svg"
                    alt="facial-icons"
                    width={21}
                    height={21}
                  />
                  Montrez votre visage
                </span>
              </DialogTitle>
            </DialogHeader>
          </Fragment>
        ) : (
          <div className="p-6 absolute w-full h-full bg-[#000000da] rounded-lg flex items-center justify-center">
            <h3 className="text-white">Chargement de la caméra...</h3>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FacialRecognitionDialog;
