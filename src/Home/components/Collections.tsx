import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Skeleton,
  Typography,
  Stack,
} from "@mui/material";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import { InputAdornment } from "@mui/material";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import QrCodeOutlinedIcon from "@mui/icons-material/QrCodeOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import useSWR from "swr";

const baseUrl = "http://192.168.22.57:8000/";
const url = `${baseUrl}listing_allCollections`;
const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export const Collections = ({ setCollection, collection }: any) => {
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  const handleChange = (event: any) => {
    const item = event.target.value;
    setCollection(item);
  };
  return (
    <div>
      {data ? (
        <FormControl sx={{ m: 1 }} fullWidth>
          <InputLabel id="demo-simple-select-helper-label">
            Collections
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={collection}
            label="Collections"
            onChange={handleChange}
          >
            {data?.map((item: any) => {
              return (
                <MenuItem key={item.key} value={item.name}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      ) : (
        <Skeleton variant="rounded" width={310} height={60} />
      )}
    </div>
  );
};

export const KeySearch = ({ keySearch }: any) => {
  const handleOnchange = (e: any) => {
    const item = e.target.value;
    keySearch(item);
    console.log("wwwww:::", item);
  };
  return (
    <div>
      <TextField
        sx={{ m: 1 }}
        size="small"
        id="outlined-basic"
        label="Search"
        placeholder="..."
        fullWidth
        variant="outlined"
        onChange={handleOnchange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ManageSearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
export const SelectColumn = ({ setColumn, column, data }: any) => {
  const handleChange = (e: any) => {
    const item = e.target.value;
    setColumn(item);
    console.log("bbbb:::", item);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} fullWidth size="small">
        <InputLabel id="demo-simple-select-helper-label">Column</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={column}
          label="Column"
          onChange={handleChange}
        >
          {/* <MenuItem value="p_name">Title</MenuItem>
          <MenuItem value="id">Id</MenuItem>
          <MenuItem value="type">Type</MenuItem>
          <MenuItem value="for">For</MenuItem>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="parking">Parking</MenuItem>
          <MenuItem value="bathroom">Bathroom</MenuItem>
          <MenuItem value="bedroom">Bedroom</MenuItem>
          <MenuItem value="location">Location</MenuItem> */}
          {data?.map((item: any) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};
export const Operator = ({ setOperator, operator }: any) => {
  const handleChange = (e: any) => {
    const item = e.target.value;
    setOperator(item);
    console.log("operaotr:::", item);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} fullWidth size="small">
        <InputLabel id="demo-simple-select-helper-label">Operator</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={operator}
          label="Operator"
          onChange={handleChange}
        >
          <MenuItem value="start_with">Start With</MenuItem>
          <MenuItem value="end_with">End With</MenuItem>
          <MenuItem value="equal">Equal</MenuItem>
          <MenuItem value="exsit ">Exsit</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export const RowPerpage = ({ rowPerpage, setRowPerpage }: any) => {
  const handleOnchange = (e: any) => {
    const item = e.target.value;
    setRowPerpage(item);
  };
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography>Row per page:</Typography>
      <FormControl sx={{ width: 80 }} size="small">
        <InputLabel id="demo-simple-select-label">Row</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rowPerpage}
          label="Row"
          onChange={handleOnchange}
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={80}>80</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};
