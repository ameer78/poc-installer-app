import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";
import { useEffect, useState } from "react";
import AlertDialog from "../AlertDialog/AlertDialog";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../../Store/RootStoreProvider";

const Footer = observer((props: any) => {
  const navigate = useNavigate();
  const store = useRootStore().installStore;

  const [showPrevious, setShowPrevious] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  console.log(store.inProgress);

  useEffect(() => {
    const url = window.location.href.split("/").pop();
    if (url === "final") {
      setShowPrevious(false);
    } else {
      setShowPrevious(true);
    }
  }, []);

  const handleNextStep = () => {
    const url = window.location.href.split("/").pop();
    switch (url) {
      case "":
        if (!store.userInfo.email) {
          setShowDialog(true);
        } else {
          store.setInProgress(true);
          navigate("/progress");
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="footer-container">
      <Grid container>
        <Grid item md={6} sm={0} xs={0}></Grid>
        <Grid item md={6} sm={12} xs={12}>
          {!store.inProgress &&
            !(store.installationStatus?.status === "success") && (
              <div className="buttons-container">
                <Button variant="contained" onClick={handleNextStep}>
                  Next
                </Button>
                {showPrevious && (
                  <Button
                    variant="outlined"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Previous
                  </Button>
                )}
              </div>
            )}
        </Grid>
      </Grid>
      <AlertDialog
        title={"Missing Info"}
        message={"Please fill all required info in the previous form"}
        handleClose={() => {
          setShowDialog(false);
        }}
        open={showDialog}
      />
    </div>
  );
});

export default Footer;
