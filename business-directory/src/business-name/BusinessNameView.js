import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import {
  DialogContent,
  DialogActions,
  Dialog,
  DialogTitle,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

function BusinessNameView({
  register,
  open,
  handleClickButton,
  handleDeletePerson,
  handleClickEditButton,
  handleClickDeleteButton,
  openDelete,
  openEdit,
  onSubmit,
  handleUpdatePerson,
  handleSubmit,
  business,
  setPersonId,
}) {
  return (
    <>
      <Grid>
        <TableContainer>
          <Table>
            <TableHead>
              <TableCell>
                <Typography variant="h4">Business Name</Typography>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Button variant="contained" onClick={handleClickButton}>
                  Create person
                </Button>
              </TableCell>
            </TableHead>
            <TableBody>
              {business
                ? business.map((businessItem) => (
                    <TableRow key={businessItem.personId} hover>
                      <TableCell>{businessItem.name}</TableCell>
                      <TableCell>{businessItem.role}</TableCell>

                      <TableCell>
                        <IconButton
                          onClick={() => {
                            setPersonId(businessItem.personId);
                            handleClickEditButton();
                          }}
                        >
                          <EditOutlinedIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            handleClickDeleteButton(businessItem.personId);
                          }}
                        >
                          <DeleteOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Dialog maxWidth="sm" fullWidth open={open}>
        <DialogTitle>Create person</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} id="business-names">
            <TextField
              autoFocus
              {...register("name")}
              margin="dense"
              id="name"
              label="Name"
              type="name"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              {...register("role")}
              margin="dense"
              id="role"
              label="Role"
              type="role"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              {...register("email")}
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              {...register("phone")}
              margin="dense"
              id="phone"
              label="Phone"
              type="phone"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              {...register("join_date")}
              margin="dense"
              id="join_date"
              type="date"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickButton}>Cancel</Button>
          <Button
            form="business-names"
            onClick={handleClickButton}
            autoFocus
            type="submit"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog maxWidth="sm" fullWidth open={openDelete}>
        <DialogTitle>Are you sure to delete this person?</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              handleClickDeleteButton();
            }}
          >
            Cancel
          </Button>
          <Button
            form="business-names"
            autoFocus
            onClick={() => {
              handleClickDeleteButton();
              handleDeletePerson();
            }}
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog maxWidth="sm" fullWidth open={openEdit}>
        <DialogTitle>Edit person</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} id="business-names">
            <TextField
              autoFocus
              {...register("name")}
              margin="dense"
              id="name"
              label="Name"
              type="name"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              {...register("role")}
              margin="dense"
              id="role"
              label="Role"
              type="role"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              {...register("email")}
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              {...register("phone")}
              margin="dense"
              id="phone"
              label="Phone"
              type="phone"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              {...register("join_date")}
              margin="dense"
              id="join_date"
              data-date-format="YYYY MM DD"
              type="date"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickEditButton}>Cancel</Button>
          <Button
            form="business-names"
            onClick={() => {
              handleClickEditButton();
              handleUpdatePerson();
            }}
            autoFocus
            type="submit"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BusinessNameView;
