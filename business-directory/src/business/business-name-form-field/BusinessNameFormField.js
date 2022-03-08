import BusinessNameTextFieldView from "./BusinessNameFormView";

export default function BusinessNameForm({
  id,
  handleSubmit,
  onSubmit,
  register,
  businessItem,
}) {
  return (
    <BusinessNameTextFieldView
      {...{ register, id, handleSubmit, onSubmit, businessItem }}
    />
  );
}
