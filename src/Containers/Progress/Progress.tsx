import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import LinearProgressWithValueLabel from "../../Components/LinearProgressWithValueLabel/LinearProgressWithValueLabel";
import "./progress.scss";
import { useRootStore } from "../../Store/RootStoreProvider";

const Progress = observer((props: any) => {
  const store = useRootStore().installStore;
  const navigate = useNavigate();

  useEffect(() => {
    async function sendInstallInfoToServer() {
      await store.sendInstallInfo();
      navigate("/final");
    }
    sendInstallInfoToServer();
  }, []);

  return (
    <div className="progress-container">
      <Typography variant="h4">Hello Ameer!</Typography>
      <div className="image">
        <img src="https://www.hp.com/content/dam/sites/worldwide/industrial-printers/indigo-digital-presses/printing-presses/section_3_product_100K.png" />
      </div>
   
      <LinearProgressWithValueLabel progress={store.progress} />
    </div>
  );
});

export default Progress;
