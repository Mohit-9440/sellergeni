import React, { useEffect, useState } from "react";
import { Typography, Button, TextField, Tabs, Tab } from "@material-ui/core";
import "./dashboardordersales.css";
import LineChart from "../LineChart";
import { GoArrowDown, GoArrowRight, GoArrowUp, GoArrowUpRight } from "react-icons/go";

export default function DashBoardOrderSales() {
  const value = 1;
  return (
    <>
      <div className="dashboard-head-bottom-left">
        <div className="dashboard-head-bottom-left-top">
        <Tabs value={value}>
        <Tab label="Orders">
          <Typography style={{textTransform: "capitalize"}}>
            Orders
          </Typography>
        </Tab>
        <Tab label="Sales">
          <Typography style={{textTransform: "capitalize"}}>
            Sales
          </Typography>
        </Tab>
      </Tabs>
        </div>
        <div className="dashboard-head-bottom-left-bottom">
          <div className="dashboard-head-graph-hero">
            <div>Total Sales</div>
            <div style={{ color: "#000", fontSize: '14px' }}>
              <span style={{ fontSize: "22px", fontWeight: "600" }}>
                ₹42,450
              </span>
              {"  "} <span style={{ color: "red" }}><GoArrowDown color="red"/>-62.77%</span> vs last 7
              days <span style={{ fontWeight: "500" }}>₹1,14,000</span>
            </div>
          </div>
          {/* <div className="dashboard-head-graph"><LineChart/></div> */}
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
              <Typography className="dashboard-head-bottom-right-21">75</Typography>
              <Typography className="dashboard-head-bottom-right-22" style={{color: "#ee2222", display: "flex", alignItems:"center"}}><GoArrowDown color="#ee2222"/>-62.12%</Typography>
            </div>
          </div>
          <div className="dashboard-head-bottom-right-data">
            <Typography className="dashboard-head-bottom-right-1">
              Avg Order Value
            </Typography>
            <div className="dashboard-head-bottom-right-2">
              <Typography className="dashboard-head-bottom-right-21">₹566</Typography>
              <Typography className="dashboard-head-bottom-right-22" style={{color: "#078B44", display: "flex", alignItems:"center"}}><GoArrowUp color="#078B44"/>1.01%</Typography>
            </div>
          </div>
          <div className="dashboard-head-bottom-right-data">
            <Typography className="dashboard-head-bottom-right-1">
              Total Number of products
            </Typography>
            <div className="dashboard-head-bottom-right-2">
              <Typography className="dashboard-head-bottom-right-21" style={{color: "#9A3DE4"}}>28</Typography>
              <GoArrowUpRight color="#9A3DE4"/>
            </div>
          </div>
          <div className="dashboard-head-bottom-right-data">
            <Typography className="dashboard-head-bottom-right-1">
            Total Number of campaigns
            </Typography>
            <div className="dashboard-head-bottom-right-2">
              <Typography className="dashboard-head-bottom-right-21" style={{color: "#9A3DE4"}}>4</Typography>
              <GoArrowUpRight color="#9A3DE4"/>
            </div>
          </div>
        </div>
        <div className="dashboard-head-bottom-right-bottom">
            <div className="dashboard-head-bottom-right-bottom-heading">Account Health Rating</div>
            <div className="dashboard-head-bottom-right-bottom-progress"></div>
            <div className="dashboard-head-bottom-right-bottom-view-report"><GoArrowRight/>View Report</div>
        </div>
      </div>
    </>
  );
}
