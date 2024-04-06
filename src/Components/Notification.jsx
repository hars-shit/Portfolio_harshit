import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Notification(props) {
  const {open,setOpen,warn}=props;
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity= {warn ? "warning":"success"}
          variant="filled"
          sx={{ width: '100%', background: 'rgb(28, 28, 39)',   }}
        >
        {warn ? "Please Enter Details !" :  "Email Send Successfully!"}
        </Alert>
      </Snackbar>
    </div>
  );
}
