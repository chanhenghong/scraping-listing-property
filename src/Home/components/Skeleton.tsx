import React from "react";
import { Skeleton, Stack, Grid } from "@mui/material";

export const Skeletons = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ mt: 0 }}
      >
        <Grid item xs={12} md={6} lg={4} sm={12}>
          <Skeleton variant="rounded" width={270} height={370} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sm={12}>
          <Skeleton variant="rounded" width={270} height={370} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sm={12}>
          <Skeleton variant="rounded" width={270} height={370} />
        </Grid>
      </Grid>
    </div>
  );
};
export const TableSkeletons = () => {
  return (
    <div>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ mt: 0 }}
      >
        <Skeleton variant="rounded" width={900} height={50} />
        <Skeleton variant="rounded" width={900} height={50} />
        <Skeleton variant="rounded" width={900} height={50} />
        <Skeleton variant="rounded" width={900} height={50} />
        <Skeleton variant="rounded" width={900} height={50} />
        <Skeleton variant="rounded" width={900} height={50} />
      </Stack>
    </div>
  );
};
