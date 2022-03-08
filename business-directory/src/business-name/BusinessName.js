import BusinessNameView from "./BusinessNameView";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

function BusinessName(props, businessItem) {
  const { register, handleSubmit, getValues } = useForm();
  const [open, setOpen] = useState();
  const [openDelete, setOpenDelete] = useState();
  const [openEdit, setOpenEdit] = useState();
  const [personIdSelected, setPersonIdSelected] = useState();

  const [business, setBusiness] = useState();


  let { businessId } = useParams();

  const handleClickButton = () => {
    setOpen((previousState) => !previousState);
  };

  const handleClickDeleteButton = (personId) => {
    setPersonIdSelected(personId);
    setOpenDelete((previousState) => !previousState);
  };

  const handleClickEditButton = (personId) => {
    setOpenEdit((previousState) => !previousState);
  };

  const setPersonId = (personId) => {
    setPersonIdSelected(personId);
  };

  const handleDeletePerson = async () => {
    await axios.delete(
      `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${businessId}/persons/${personIdSelected}`,
      { headers }
    );
    const newBusiness = [...business];
    const newBusinessFiltered = newBusiness.filter(
      (newBusinessItem) => newBusinessItem.personId !== personIdSelected
    );
    setBusiness(newBusinessFiltered);
  };

  const handleUpdatePerson = async () => {
    const payload = getValues();
    let headers = {
      "Content-Type": "application/json",
      "x-api-key": "CwJ8ohwPe43Ql07GCv7Gu3XECLT1b26Zav2DzzQL",
    };

    await axios.put(
      `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${businessId}/persons/${personIdSelected}/`,
      payload,
      { headers }
    );
    const newBusiness = [...business];
    const newBusinessFiltered = newBusiness.filter(
      (newBusinessItem) => newBusinessItem.personId !== personIdSelected
    );
    setBusiness(newBusinessFiltered);
  };

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "CwJ8ohwPe43Ql07GCv7Gu3XECLT1b26Zav2DzzQL",
  };

  const setBusinessData = async () => {
    const response = await axios.get(
      `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${businessId}/persons/`,
      { headers }
    );
    setBusiness(response && response.data ? response.data.persons : null);
  };

  useEffect(() => {
    setBusinessData();
  }, [setBusiness]);

  const onSubmit = async () => {
    const payload = getValues();
    await axios.post(
      `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${businessId}/persons`,
      payload,
      { headers }
    );
    setBusinessData();
  };

  return business ? (
    <BusinessNameView
      {...{
        register,
        open,
        handleClickButton,
        onSubmit,
        handleSubmit,
        handleDeletePerson,
        handleClickEditButton,
        handleClickDeleteButton,
        business,
        openDelete,
        openEdit,
        handleUpdatePerson,
        setBusiness,
        setPersonId,
      }}
    />
  ) : null;
}

export default BusinessName;
