import { Stack, Pagination, Grid, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import RenderCard from "./components/renderCard";
import TableCard from "./components/tableCard";
import useSWR from "swr";
import { Skeletons, TableSkeletons } from "./components/Skeleton";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import DoNotDisturbOutlinedIcon from "@mui/icons-material/DoNotDisturbOutlined";
import {
  KeySearch,
  Collections,
  SelectColumn,
  Operator,
  RowPerpage,
} from "./components/Collections";

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
//ip wifi z1data
const baseUrl = "http://192.168.22.57:8000";
//ip hotspot
// const baseUrl = "http://127.0.0.1:8000/";

const Home = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [collection, setCollection] = useState("khmerhome");
  const [columnName, setColumnName] = useState("none");
  const [operator, setOperator] = useState("none");

  const handleSelect = (value: string) => {
    console.log("setCollection: ", value);
    setCollection(value);
  };
  const handleSelectColumn = (value: string) => {
    console.log("Select Column:::", value);
    setColumnName(value);
  };
  const handleSelectOperator = (value: string) => {
    console.log("Select Operator:::", value);
    setOperator(value);
  };

  const [rowPerpage, setRowPerpage] = useState(30);
  const handleRowPerpage = (value: any) => {
    console.log("setRowPerpage: ", value);
    setRowPerpage(value);
  };

  const [keySearch, setKeySearch] = useState("none");
  const handleSearch = (value: any) => {
    setKeySearch(value);
  };

  const [view, setView] = useState(true);

  const handleView = () => {
    setView(!view);
  };

  // const URL =
  //   "http://192.168.22.59:8000/allItems/khmerhome/?column_name=none&operator=none&key_search=none&page_num=1&page_size=30";
  const URL = `${baseUrl}/allItems/${collection}/?column_name=${columnName}&operator=${operator}&key_search=${keySearch}&page_num=${pageIndex}&page_size=${rowPerpage}`;
  const [urlState, setUrlState] = useState(URL);
  const handleChange = (e: any, p: any) => {
    setPageIndex(p);
  };
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>Failed to load</div>;

  const totalData = data?.total;
  const perPage = data?.count;
  const countPage = totalData / perPage;
  console.log("nnnnnn::::", totalData);

  return (
    <div>
      <HomeLayout title1="Z1 DATA Scraping " title2="Rent">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          sx={{ flex: 1, mr: 5, ml: 5, mt: 2 }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{
              mt: 1,
              maxWidth: 300,
              position: "sticky",
              top: 0,
            }}
          >
            <Grid container spacing={1}>
              <Grid item lg={12} xs={12}>
                <Collections
                  setCollection={handleSelect}
                  collection={collection}
                />
              </Grid>
              <Grid item lg={6} xs={6}>
                <SelectColumn
                  setColumn={handleSelectColumn}
                  column={columnName}
                  data={data?.allAttributes}
                />
              </Grid>
              <Grid item lg={6} xs={6}>
                <Operator
                  setOperator={handleSelectOperator}
                  operator={operator}
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <KeySearch keySearch={handleSearch} />
              </Grid>

              <Grid item lg={6} xs={6}>
                <Button
                  startIcon={
                    view ? <GridViewOutlinedIcon /> : <TableRowsOutlinedIcon />
                  }
                  variant="outlined"
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    width: 100,
                    ml: 1,
                    mt: 1,
                    height: 38,
                  }}
                  onClick={handleView}
                >
                  <Typography>{view ? "Grid" : "Table"}</Typography>
                </Button>
              </Grid>
            </Grid>
          </Stack>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid>
              {!data && view && (
                <div>
                  <Skeletons />
                </div>
              )}
            </Grid>

            {view &&
              data?.data?.map((item: any, index: any) => {
                const image = item.image;
                const name =
                  item.name ||
                  item.p_name ||
                  item["Property Name:"] ||
                  item.LinkHouse ||
                  item.Warehouse ||
                  item.LandPlot ||
                  item.FarmLand ||
                  item.ResidentLand ||
                  item.CommercialLand ||
                  "N/A";
                const id =
                  item.Code ||
                  item["Code:"] ||
                  item.id ||
                  item.PropertyID ||
                  item["ID"] ||
                  item.PropertyId ||
                  item.propertyId ||
                  item["Property ID"] ||
                  item.Property_ID ||
                  item.p_id ||
                  "N/A";
                const parking =
                  item.Parking ||
                  item.parking ||
                  item.Carparks ||
                  item.parkingspot ||
                  item.ParkingSpace ||
                  item.Garages ||
                  item.Garage ||
                  item["Parking:"] ||
                  "N/A";
                const bathroom =
                  item.bathrooms ||
                  item.Bathrooms ||
                  item.Bathroom ||
                  item.Bathroom ||
                  item.bathroom ||
                  "N/A";
                const bedroom =
                  item.bedrooms ||
                  item.Bedrooms ||
                  item.Bedroom ||
                  item.bedroom ||
                  "N/A";
                const type =
                  item.p_type ||
                  item.propteryType ||
                  item.listingType ||
                  item.PropertyType ||
                  item["Property Type"] ||
                  item.propertytype ||
                  item["Property type"] ||
                  item["Property Type:"] ||
                  item.extra_raw?.BuildingTypeName ||
                  item.Type ||
                  "N/A";
                const location =
                  item.province ||
                  item["State/County"] ||
                  item.extra_raw?.RegionName ||
                  item.district ||
                  "N/A";
                const price =
                  item.p_price ||
                  item.price ||
                  item.Price ||
                  item.RentPrice ||
                  item.SalePrice ||
                  item["Price:"] ||
                  "N/A";
                const sell =
                  item.for ||
                  // item.p_type ||
                  item.status ||
                  item.propertytype ||
                  item.PropertyType ||
                  item.p_for ||
                  item["Type"] ||
                  "N/A";
                return (
                  <Grid item xs={12} md={6} lg={4} sm={12}>
                    <div key={index}>
                      <RenderCard
                        image={image}
                        title={name}
                        itemCode={id}
                        parkingCount={parking}
                        bathroomCount={bathroom}
                        bedCount={bedroom}
                        location={location}
                        type={type}
                        price={price}
                        sell={sell}
                      />
                    </div>
                  </Grid>
                );
              })}
            {!view && <TableCard data={data?.data} />}
            {!data && !view && (
              <div>
                <TableSkeletons />
              </div>
            )}
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              {totalData == 0 && data && (
                <DoNotDisturbOutlinedIcon
                  sx={{
                    width: 70,
                    height: 70,
                    color: "#a4a7ad",
                    mt: 20,
                    mb: 20,
                  }}
                />
              )}
            </Grid>
            {/* </Grid> */}
          </Grid>
          {/* </Stack> */}
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={10}
          sx={{ mt: 2, mb: 7 }}
        >
          <Pagination
            count={Math.trunc(countPage)}
            page={pageIndex}
            onChange={handleChange}
            shape="rounded"
            size="large"
          />
          <RowPerpage rowPerpage={perPage} setRowPerpage={handleRowPerpage} />
          {perPage ? (
            <Typography>
              {perPage * pageIndex} of {totalData}
            </Typography>
          ) : null}
        </Stack>
      </HomeLayout>
    </div>
  );
};

export default Home;
