import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
interface ErrorDialogProps {
  children?: ReactNode;
  title: string;
}
export const ErrorDialog = (props: ErrorDialogProps) => {
  const { title, children } = props;

  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    router.back();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title} </DialogTitle>
      {children ? (
        children
      ) : (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            해당 컨텐츠는 종료되었습니다.
          </DialogContentText>
        </DialogContent>
      )}
    </Dialog>
  );
};
