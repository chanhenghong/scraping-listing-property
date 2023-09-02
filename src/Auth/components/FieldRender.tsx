import React, { useState } from "react";
import {
  IconButton,
  Typography,
  InputAdornment,
  TextField,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export const RenderInput = React.memo(
  ({ input, label, type, ...resp }: any) => {
    return (
      <div>
        <Typography
          variant="body1"
          sx={{
            color: "#667085",
            fontWeight: 500,
            fontSize: 15,
            marginBottom: 1,
          }}
        >
          {label}
        </Typography>
        <TextField
          {...input}
          {...resp}
          variant="outlined"
          placeholder="...@gmail.com"
          type={type}
        />
      </div>
    );
  }
);
export const RenderPassword = React.memo(
  ({ input, label, type, ...resp }: any) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleHidePassword = () => {
      setShowPassword(!showPassword);
    };
    return (
      <div>
        <Typography
          variant="body1"
          sx={{
            color: "#667085",
            fontWeight: 500,
            fontSize: 15,
            marginBottom: 1,
          }}
        >
          {label}
        </Typography>
        <TextField
          {...input}
          {...resp}
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleHidePassword}>
                  {showPassword ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    );
  }
);
