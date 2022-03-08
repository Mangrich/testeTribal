import TextField from "@mui/material/TextField";

export default function BusinessNameFormView({
  register,
  id,
  handleSubmit,
  onSubmit,
  businessItem,
}) {
  return (
    <form id={id} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        autoFocus
        {...register("name")}
        margin="dense"
        id="name"
        label="Business name"
        type="name"
        fullWidth
        variant="standard"
      />
    </form>
  );
}
