import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import InfoOutlined from "@mui/icons-material/InfoOutlined";

import TableContainer from "@mui/material/TableContainer";
import IconButton from "@mui/material/IconButton";
import TableRow from "@mui/material/TableRow";
import BusinessDialog from "../business/business-dialog/BusinessDialog";
import BusinessNameFormField from "../business/business-name-form-field/BusinessNameFormField";

function BusinessView({
  handleDialog,
  handleDialogEdit,
  handleDialogDelete,
  handleEditBusiness,
  handleDeleteBusiness,
  handleClickInfo,
  register,
  handleSubmit,
  onSubmit,
  reset,
  setOpen,
  open,
  openDelete,
  openEdit,
  businessItem,
  setBusinessItem,
  setOpenEdit,
  setOpenDelete,
  business,
}) {
  return (
    <div className="App">
      <header className="App-header">
        <Grid>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h4">Business</Typography>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={handleDialog}>
                      Create business
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {business
                  ? business.map((businessItem) => (
                      <TableRow key={businessItem.businessId} hover>
                        <TableCell>{businessItem.name}</TableCell>
                        <TableCell>
                          <IconButton
                            onClick={(event) => {
                              reset();
                              handleDialogEdit();
                              setBusinessItem(businessItem.businessId);
                            }}
                          >
                            <EditOutlinedIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              reset();
                              handleDialogDelete();
                              setBusinessItem(businessItem.businessId);
                            }}
                          >
                            <DeleteOutlinedIcon />
                          </IconButton>

                          <IconButton
                            onClick={() => {
                              handleClickInfo(businessItem.businessId);
                            }}
                          >
                            <InfoOutlined />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <BusinessDialog
          {...{
            title: "Create business",
            formId: "form-business-name",
            open,
            reset,
            setOpen,
          }}
        >
          <DialogContent>
            <BusinessNameFormField
              {...{
                register,
                id: "form-business-name",
                handleSubmit,
                onSubmit,
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialog}>Cancel</Button>
            <Button
              onClick={() => {
                handleDialog();
              }}
              autoFocus
              form="form-business-name"
              type="submit"
            >
              Create
            </Button>
          </DialogActions>
        </BusinessDialog>

        <BusinessDialog
          {...{
            title: "Are you sure you want to delete this business?",
            formId: "form-business-delete-name",
            reset,
            open: openDelete,
            setOpen: setOpenDelete,
          }}
        >
          <DialogActions>
            <Button onClick={handleDialogDelete}>Cancel</Button>
            <Button
              onClick={() => {
                handleDialogDelete();
                handleDeleteBusiness(businessItem);
              }}
              autoFocus
            >
              Remove
            </Button>
          </DialogActions>
        </BusinessDialog>

        <BusinessDialog
          {...{
            title: "Edit business",
            formId: "form-business-edit-name",
            reset,
            open: openEdit,
            setOpen: setOpenEdit,
          }}
        >
          <DialogContent>
            <BusinessNameFormField
              {...{
                register,
                id: "form-business-edit-name",
                handleSubmit,
                onSubmit,
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogEdit}>Cancel</Button>
            <Button
              onClick={() => {
                handleDialogEdit();
                handleEditBusiness(businessItem);
              }}
              autoFocus
            >
              Save
            </Button>
          </DialogActions>
        </BusinessDialog>
      </header>
    </div>
  );
}

export default BusinessView;
