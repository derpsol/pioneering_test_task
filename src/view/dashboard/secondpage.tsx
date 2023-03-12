import { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  pt: "36px",
};

function SecondPage() {
  const buttonStyle = (theme: any) => ({
    bgcolor: theme.palette.background.light,
    color: theme.palette.text.info,
    textTransform: "none",
    fontFamily: "Arial",
    fontSize: "24px",
    mt: "20px",
    border: "1px solid black",
  });

  const [removeCount, setRemoveCount] = useState(0);
  const [deleteCount, setDeleteCount] = useState(0);
  const [deleteStaus, setDeleteStatus] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const removeButtonClicked = () => {
    setRemoveCount(removeCount + 1);
    handleClose2();
  };

  return (
    <Box width="100%" display="flex" alignItems="center" flexDirection="column">
      <Button variant="contained" sx={buttonStyle} onClick={handleOpen1}>
        Single CTA
      </Button>
      <Button variant="contained" sx={buttonStyle} onClick={handleOpen2}>
        Remove {removeCount}
      </Button>
      <Button variant="contained" sx={buttonStyle} onClick={() => { handleOpen3(); setDeleteCount(deleteCount + 1); }}>
        {deleteStaus ? `Disabled ${deleteCount}` : `Delete ${deleteCount}`}
      </Button>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            textAlign="center"
            id="modal-modal-title"
            variant="h2"
            component="h1"
          >
            Information
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="h4"
            component="h4"
            textAlign="center"
            sx={{ mt: 2 }}
          >
            You have clicked Single CTA Button.
          </Typography>
          <Box textAlign="right" mt="60px">
            <Button
              sx={{
                backgroundColor: "#03F",
                color: "white",
                "&:hover": {
                  backgroundColor: "#03F",
                },
              }}
              onClick={handleClose1}
            >
              OK
            </Button>
          </Box>{" "}
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            textAlign="center"
            id="modal-modal-title"
            variant="h2"
            component="h1"
          >
            Remove?
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="h4"
            component="h4"
            textAlign="center"
            sx={{ mt: 2 }}
          >
            Are you sure you want to remove the Remove {removeCount} button?
          </Typography>
          <Box textAlign="right" mt="24px">
            <Button
              sx={{
                backgroundColor: "#ffa500",
                color: "black",
                "&:hover": {
                  backgroundColor: "#03F",
                },
              }}
              onClick={removeButtonClicked}
            >
              Remove
            </Button>
            <Button
              variant="outlined"
              sx={{
                ml: "12px",
                color: "white",
                "&:hover": {
                  backgroundColor: "#03F",
                },
              }}
              onClick={handleClose2}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            textAlign="center"
            id="modal-modal-title"
            variant="h2"
            component="h1"
          >
            Delete?
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="h4"
            component="h4"
            textAlign="center"
          >
            Are you sure you want to delete the Delete {deleteCount} button?
            This cannot be undone!
          </Typography>
          <Box textAlign="right">
            <Button
              sx={{
                backgroundColor: "#cc0000",
                color: "white",
                "&:hover": {
                  backgroundColor: "#03F",
                },
              }}
              onClick={() => {setDeleteStatus(!deleteStaus)}}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              sx={{
                ml: "12px",
                color: "white",
                "&:hover": {
                  backgroundColor: "#03F",
                },
              }}
              onClick={handleClose3}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default SecondPage;
