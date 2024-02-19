import React from "react";
import "./ordersummary.css";
import { CiSearch, CiCalendar, CiCircleQuestion } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { GoColumns } from "react-icons/go";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";
import Kettle from "../../assets/kettle.jpg";
export default function OrderSummary() {
  const columns = [
    { id: "column1", label: "Product" },
    { id: "column2", label: "Asin/SKU" },
    { id: "column3", label: "Sales(₹)" },
    { id: "column4", label: "Sales(%)" },
    { id: "column5", label: "AdSpend(₹)" },
    { id: "column6", label: "AdSpend(%)" },
    { id: "column6", label: "ACOS(%)" },
  ];
  const data = [
    {
      column1: {
        image: "../../assets/kettle.jpg",
        text1: "Cadlec Crystal 1.5 Litres Electric",
        text2: "Kettle | Stainless Steel | Automatic...",
      },
      column2: "B0CR7JC2VQ / Crystal 115",
      column3: "11,251",
      column4: "57.85%",
      column5: "3,567.18",
      column6: "44.64%",
      column7: "31.71",
    },
    {
      column1: {
        image: "../../assets/kettle.jpg",
        text1: "Cadlec Aquaheat 1.8 Litres Electric",
        text2: "Kettle | Stainless Steel Body|...",
      },
      column2: "B0CK8MTV6M / AquaHeat 018",
      column3: "8,197",
      column4: "42.15%",
      column5: "4,422.97",
      column6: "55.36%",
      column7: "53.96",
    },
  ];

  const rowsPerPage = 2;
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="order-summary">
        <div className="order-summary-heading">
          Order Summary
          <CiCircleQuestion color="#fff" />
        </div>
        <div className="order-summary-table">
          <div className="order-summary-table-top">
            <div className="order-summary-table-top-left">
              <div className="order-summary-table-search summary-table-feature">
                <CiSearch /> Search Products
              </div>
              <div className="order-summary-table-filter summary-table-feature">
                <IoFilter /> Filter
              </div>
            </div>
            <div className="order-summary-table-top-right">
              <div className="order-summary-table-columns summary-table-feature">
                <GoColumns /> Columns
              </div>
              <div className="order-summary-table-date summary-table-feature">
                <CiCalendar /> 10 Feb 24 to 16 Feb 24
              </div>
            </div>
          </div>
          <Table style={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    style={{ padding: "10px", color: "#a5a5a5" }}
                    key={column.id}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    {columns.map((column) => (
                      <TableCell
                        style={{ padding: "10px", fontWeight: "500"}}
                        key={column.id}
                      >
                        {column.id === "column1" ? (
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <img
                              src={Kettle}
                              alt="Product"
                              style={{
                                width: "50px",
                                height: "50px",
                                marginRight: "10px",
                              }}
                            />
                            <div className="order-table-text">
                              <span>{row[column.id].text1}</span>
                              <span>{row[column.id].text2}</span>
                            </div>
                          </div>
                        ) : (
                          row[column.id]
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[rowsPerPage]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
          />
        </div>
      </div>
    </>
  );
}
