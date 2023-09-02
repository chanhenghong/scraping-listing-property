import React from "react";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

interface IProps {
  title1: any;
  title2: any;
  children: React.ReactNode;
}

const HomeLayout: React.FC<IProps> = ({ title1, title2, children }) => {
  return (
    <div>
      <Stack direction="row">
        <Stack sx={{ width: "100%" }}>
          <Typography sx={{ ml: 6, mt: 1, color: "#6d748a" }} variant="h6">
            {title1}
          </Typography>

          <Stack>{children}</Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default HomeLayout;
