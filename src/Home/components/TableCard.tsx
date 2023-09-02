import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
  Typography,
} from "@mui/material";

const TableCard = (data: any) => {
  console.log("heng:::", data.data);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell sx={{ minWidth: 200, maxWidth: 250 }}></TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>For</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Parking</TableCell>
            <TableCell>Bathroom</TableCell>
            <TableCell>Bedroom</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.map((item: any) => {
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
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderLeft: 1,
                    borderColor: "#ededed",
                  }}
                >
                  <img src={image} alt="Picture Cover" height="50" />
                </TableCell>
                <TableCell
                  sx={{
                    minWidth: 200,
                    maxWidth: 250,
                    borderRight: 1,
                    borderColor: "#ededed",
                  }}
                >
                  <Typography>{name}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: 1,
                    borderColor: "#ededed",
                  }}
                >
                  <Typography> {id}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: 1,
                    borderColor: "#ededed",
                  }}
                >
                  <Typography>{type}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: 1,
                    borderColor: "#ededed",
                  }}
                >
                  <Typography>{sell}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: 1,
                    borderColor: "#ededed",
                  }}
                >
                  <Typography> ${price}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: 1,
                    borderColor: "#ededed",
                  }}
                >
                  <Typography>{parking}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: 1,
                    borderColor: "#ededed",
                  }}
                >
                  <Typography>{bathroom}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: 1,
                    borderColor: "#ededed",
                  }}
                >
                  <Typography>{bedroom}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: 1,
                    borderColor: "#ededed",
                  }}
                >
                  <Typography>{location}</Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCard;
