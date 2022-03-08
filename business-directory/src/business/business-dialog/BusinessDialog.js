import BusinessDialogView from "./BusinessDialogView";
import { useForm } from "react-hook-form";

export default function BusinessDialog({
  title,
  formId,
  children,
  open,
  setOpen,
}) {
  const handleDialog = () => {
    setOpen((previousState) => !previousState);
  };

  return (
    <BusinessDialogView {...{ open, handleDialog, title, formId, children }} />
  );
}
