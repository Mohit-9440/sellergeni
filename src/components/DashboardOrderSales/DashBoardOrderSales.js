import React from "react";
import { Typography, Tabs, Tab } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import "./dashboardordersales.css";
import { styled } from "@mui/material/styles";

import LineChart from "../LineChart";
import {
  GoArrowDown,
  GoArrowRight,
  GoArrowUp,
  GoArrowUpRight,
} from "react-icons/go";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="top" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
export default function DashBoardOrderSales() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="dashboard-head-bottom-left">
        <div className="dashboard-head-bottom-left-top">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              label={
                <Typography
                  style={{
                    textTransform: "capitalize",
                    fontSize: "14px",
                    color: value === 0 ? "primary" : "inherit",
                    borderBottom: value === 0 ? "1px solid #414d5c !important" : "none",
                  }}
                >
                  Orders
                </Typography>
              }
            />
            <Tab
              label={
                <Typography
                  style={{
                    textTransform: "capitalize",
                    fontSize: "14px",
                    color: value === 1 ? "primary" : "inherit",
                    borderBottom: value === 0 ? "1px solid #414d5c !important" : "none",
                  }}
                >
                  Sales
                </Typography>
              }
            />
          </Tabs>
        </div>
        <div className="dashboard-head-bottom-left-bottom">
          <div className="dashboard-head-graph-hero">
            <div className="dashboard-head-graph-hero-heading">Total Sales</div>
            <div style={{ color: "#000", fontSize: "14px" }}>
              <span style={{ fontSize: "22px", fontWeight: "600" }}>
                ₹42,450
              </span>
              {"  "}{" "}
              <span style={{ color: "red" }}>
                <GoArrowDown color="red" />
                -62.77%
              </span>{" "}
              vs last 7 days{" "}
              <span style={{ fontWeight: "500" }}>₹1,14,000</span>
            </div>
          </div>
          <div className="dashboard-head-graph">
            <LineChart/>
          </div>
        </div>
      </div>
      <div className="dashboard-head-bottom-right">
        <div className="dashboard-head-bottom-right-top">Store Overview</div>
        <div className="dashboard-head-bottom-right-main">
          <div className="dashboard-head-bottom-right-data">
            <Typography className="dashboard-head-bottom-right-1">
              Total Order
            </Typography>
            <div className="dashboard-head-bottom-right-2">
              <Typography className="dashboard-head-bottom-right-21">
                75
              </Typography>
              <Typography
                className="dashboard-head-bottom-right-22"
                style={{
                  color: "#ee2222",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <GoArrowDown color="#ee2222" />
                -62.12%
              </Typography>
            </div>
          </div>
          <div className="dashboard-head-bottom-right-data">
            <Typography className="dashboard-head-bottom-right-1">
              Avg Order Value
            </Typography>
            <div className="dashboard-head-bottom-right-2">
              <Typography className="dashboard-head-bottom-right-21">
                ₹566
              </Typography>
              <Typography
                className="dashboard-head-bottom-right-22"
                style={{
                  color: "#078B44",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <GoArrowUp color="#078B44" />
                1.01%
              </Typography>
            </div>
          </div>
          <div className="dashboard-head-bottom-right-data">
            <Typography className="dashboard-head-bottom-right-1">
              Total Number of products
            </Typography>
            <div className="dashboard-head-bottom-right-2">
              <Typography
                className="dashboard-head-bottom-right-21"
                style={{ color: "#9A3DE4" }}
              >
                28
              </Typography>
              <GoArrowUpRight color="#9A3DE4" />
            </div>
          </div>
          <div className="dashboard-head-bottom-right-data">
            <Typography className="dashboard-head-bottom-right-1">
              Total Number of campaigns
            </Typography>
            <div className="dashboard-head-bottom-right-2">
              <Typography
                className="dashboard-head-bottom-right-21"
                style={{ color: "#9A3DE4" }}
              >
                4
              </Typography>
              <GoArrowUpRight color="#9A3DE4" />
            </div>
          </div>
        </div>
        <div className="dashboard-head-bottom-right-bottom">
          <div className="dashboard-head-bottom-right-bottom-heading">
            Account Health Rating
          </div>
          <div className="dashboard-head-bottom-right-bottom-progress">
            <LightTooltip title="Danger" arrow>
              <div
                className="progress-bar"
                style={{ height: "10px", width: "33%", background: "red" }}
              ></div>
            </LightTooltip>
            <LightTooltip title="Moderate" arrow>
              <div
                className="progress-bar"
                style={{ height: "10px", width: "33%", background: "yellow" }}
              ></div>
            </LightTooltip>
            <LightTooltip title="Healthy" arrow>
              <div
                className="progress-bar"
                style={{ height: "10px", width: "33%", background: "green" }}
              ></div>
            </LightTooltip>
          </div>
          <div className="dashboard-head-bottom-right-bottom-view-report">
            <GoArrowRight />
            View Report
          </div>
        </div>
      </div>
    </>
  );
}
