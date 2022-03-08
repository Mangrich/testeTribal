import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import BusinessView from "./BusinessView";

function Business() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [business, setBusiness] = useState();
  const [businessItem, setBusinessItem] = useState();
  const handleDialog = () => {
    setOpen((previousState) => !previousState);
  };

  const navigate = useNavigate();

  const handleDialogEdit = () => {
    setOpenEdit((previousState) => !previousState);
  };

  const handleDialogDelete = () => {
    setOpenDelete((previousState) => !previousState);
  };

  const handleClickRow = (businessId) => {
    navigate(`/business/${businessId}`);
  };

  const handleEditBusiness = async (businessId) => {
    const name = getValues();
    await axios.put(
      `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${businessId}`,
      name,
      { headers }
    );
    setBusinessData();
  };

  const handleDeleteBusiness = async (businessId) => {
    await axios.delete(
      `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${businessId}`,
      { headers }
    );
    const newBusiness = [...business];
    const newBusinessFiltered = newBusiness.filter(
      (newBusinessItem) => newBusinessItem.businessId !== businessId
    );
    setBusiness(newBusinessFiltered);
  };
  const setBusinessData = async () => {
    const response = await axios.get(
      "https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business",
      { headers }
    );
    setBusiness(response && response.data ? response.data.businesses : null);
  };

  useEffect(() => {
    setBusinessData();
  }, [setBusiness]);

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "CwJ8ohwPe43Ql07GCv7Gu3XECLT1b26Zav2DzzQL",
  };

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async () => {
    const name = getValues();
    await axios.post(
      "https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business",
      name,
      { headers }
    );
    setBusinessData();
  };

  return business ? (
    <BusinessView
      {...{
        handleDialog,
        handleDialogEdit,
        handleDialogDelete,
        handleEditBusiness,
        handleDeleteBusiness,
        handleClickRow,
        open,
        reset,
        openDelete,
        openEdit,
        register,
        handleSubmit,
        onSubmit,
        business,
        businessItem,
        setBusinessItem,
        setOpenEdit,
        setOpenDelete,
        getValues,
      }}
    />
  ) : null;
}

export default Business;
