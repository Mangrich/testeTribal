import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

export default function BusinessDialogView({
  open,
  handleDialog,
  title,
  children,
}) {
  return (
    <Dialog
      onClose={() => {
        handleDialog();
      }}
      open={open}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
}
