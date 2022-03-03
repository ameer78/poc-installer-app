import { Typography } from "@mui/material";
import "./Final.scss";

const Final = (props: any) => {
  return (
    <div className="progress-container">
      <Typography variant="h4">Thank you for your trust!</Typography>
      <div className="image">
        <img src="https://www.hp.com/content/dam/sites/worldwide/industrial-printers/indigo-digital-presses/printing-presses/section_3_product_100K.png" />
      </div>
      <Typography className="success-message" variant="h6">Installation Completed!</Typography>
    </div>
  );
};

export default Final;
