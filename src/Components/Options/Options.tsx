import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Typography } from "@mui/material";
import "./Options.scss";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../../Store/RootStoreProvider";
import { fields, _getPatternValue_, DFEField, patterns } from "./fields";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";





const Options = observer((props: any) => {
  const store = useRootStore();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    store.installStore.setInstallInfo(data as any);
    navigate("/progress");
  }

  const formFields = fields.map((item: DFEField) => (
    <Grid item key={item.id} xs={12} sm={6} md={4}>
      <TextField
        {...item}
        className="form-input"
        variant="outlined"
        {...register(item.name, {
          required: item.required,
          maxLength: 100,
          pattern: _getPatternValue_(item.type)(patterns) || "",
        })}
        error={errors[item.name]}
        helperText={errors[item.name] && `${item.label} is required.`}
      />
    </Grid>
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid>
        <Grid item container spacing={1} className="form-container" width={12}>
          <Grid item sm={12}>
            <Typography
              variant="h2"
              color="#165dba"
              className="form-title"
              fontSize={18}
            >
              Please fill the following:
            </Typography>
          </Grid>
          {formFields}
        </Grid>
        <Grid item container spacing={1} className="form-container" width={12}>
          {!store.installStore.userInfo.email &&
            <Alert style={{ width: "100%" }} severity="success">
              Information added successfully
            </Alert>
          }
        </Grid>
      </Grid>
      <Footer type="submit" />
    </form>
  );
});

export default Options;
