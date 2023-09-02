import * as React from "react";
import { Box, Grid, Card, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
const RenderCard = ({
  image,
  title,
  itemCode,
  parkingCount,
  bathroomCount,
  bedCount,
  location,
  price,
  type,
  sell,
}: any) => {
  return (
    <div>
      {/* <Grid container>
        <Grid xs={12} sm={12} lg={12}> */}
      <Card sx={{ padding: 0, width: 270, minHeight: 370 }}>
        <CardMedia
          component="img"
          sx={{ width: 270 , height: 180}}
          image={image}
          alt="Live from space album cover"
        />

        <CardContent sx={{ flex: "1 0 auto" }}>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Typography component="div" variant="h6" sx={{ fontSize: 15 }}>
              {title}
            </Typography>
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={2}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={2}
              >
                <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                  {itemCode},
                </Typography>
                <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                  {type}
                </Typography>
                <Stack direction="row" spacing={0.4}>
                  <DirectionsCarOutlinedIcon sx={{ fontSize: 18 }} />
                  <Typography sx={{ fontWeight: 60, fontSize: 15 }}>
                    {parkingCount}
                  </Typography>
                  <Stack direction="row" spacing={0.4}>
                    <BathtubOutlinedIcon sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontWeight: 60, fontSize: 15 }}>
                      {bathroomCount}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <Stack direction="row" spacing={0.4}>
                  <HotelOutlinedIcon sx={{ fontSize: 18 }} />
                  <Typography sx={{ fontWeight: 60, fontSize: 15 }}>
                    {bedCount}
                  </Typography>
                </Stack>
                <Typography sx={{ fontWeight: 60, fontSize: 15 }}>
                  {sell}
                </Typography>
                <Typography sx={{ fontWeight: 60, fontSize: 15 }}>
                  ${price}
                </Typography>
                <Typography sx={{ fontWeight: 60, fontSize: 15 }}>
                  {location}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};
export default RenderCard;
