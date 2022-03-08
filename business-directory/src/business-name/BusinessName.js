import BusinessNameView from "./BusinessNameView";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

function BusinessName() {
  const API_URL =
    "https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business";

  const X_API_KEY = "CwJ8ohwPe43Ql07GCv7Gu3XECLT1b26Zav2DzzQL";
  const { register, handleSubmit, getValues, reset } = useForm();
  const [open, setOpen] = useState();
  const [openDelete, setOpenDelete] = useState();
  const [openEdit, setOpenEdit] = useState();
  const [personIdSelected, setPersonIdSelected] = useState();

  const [business, setBusiness] = useState();

  const { businessId } = useParams();

  const handleClickButton = () => {
    setOpen((previousState) => !previousState);
  };

  const handleClickDeleteButton = (personId) => {
    setPersonIdSelected(personId);
    setOpenDelete((previousState) => !previousState);
  };

  const handleClickEditButton = () => {
    setOpenEdit((previousState) => !previousState);
  };

  const setPersonId = (personId) => {
    setPersonIdSelected(personId);
  };

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": X_API_KEY,
  };

  const handleDeletePerson = async () => {
    await axios.delete(`${API_URL}/${businessId}/persons/${personIdSelected}`, {
      headers,
    });
    const newBusiness = [...business];
    const newBusinessFiltered = newBusiness.filter(
      (newBusinessItem) => newBusinessItem.personId !== personIdSelected
    );
    setBusiness(newBusinessFiltered);
  };

  const handleUpdatePerson = async () => {
    const payload = getValues();
    console.log(personIdSelected);

    let headers = {
      "Content-Type": "application/json",
      "x-api-key": X_API_KEY,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    };

    await axios.put(
      `${API_URL}/${businessId}/persons/${personIdSelected}/`,
      payload,
      { headers }
    );
    const newBusiness = [...business];
    const newBusinessFiltered = newBusiness.filter(
      (newBusinessItem) => newBusinessItem.personId !== personIdSelected
    );
    setBusiness(newBusinessFiltered);
  };

  const setBusinessData = async () => {
    const response = await axios.get(`${API_URL}/${businessId}/persons/`, {
      headers,
    });
    setBusiness(response && response.data ? response.data.persons : null);
  };

  useEffect(() => {
    setBusinessData();
  }, [setBusiness]);

  const onSubmit = async () => {
    const payload = getValues();
    await axios.post(`${API_URL}/${businessId}/persons`, payload, { headers });
    setBusinessData();
  };

  return business ? (
    <BusinessNameView
      {...{
        register,
        open,
        reset,
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
