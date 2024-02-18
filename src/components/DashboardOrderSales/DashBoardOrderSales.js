import React, { useEffect, useState } from "react";
import { Typography, Button, TextField, Tabs, Tab } from "@material-ui/core";
import "./dashboardordersales.css";

export default function DashBoardOrderSales() {
  return (
    <>
      <div className="dashboard-head-bottom-left">
        <div className="dashboard-head-bottom-left-top">
          <Tabs>
            <Tab>
              <Typography>Orders</Typography>
            </Tab>
            <Tab>Sales</Tab>
          </Tabs>
        </div>
        <div className="dashboard-head-bottom-left-bottom">
          <div className="dashboard-head-graph-hero">
            <div>Total Sales</div>
            <div style={{ color: "#000" }}>
              <span style={{ fontSize: "22px", fontWeight: "600" }}>
                ₹42,450
              </span>
              {"  "} <span style={{ color: "red" }}>-62.77%</span> vs last 7
              days <span style={{ fontWeight: "500" }}>₹1,14,000</span>
            </div>
          </div>
          <div className="dashboard-head-graph"></div>
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
              <Typography className="dashboard-head-bottom-right-22" style={{color: "#EE2222"}}>-62.12%</Typography>
            </div>
          </div>
          <div className="dashboard-head-bottom-right-data">
            <Typography className="dashboard-head-bottom-right-1">
              Avg Order Value
            </Typography>
            <div className="dashboard-head-bottom-right-2">
              <Typography className="dashboard-head-bottom-right-21">₹566</Typography>
              <Typography className="dashboard-head-bottom-right-22" style={{color: "#078B44"}}>1.01%</Typography>
            </div>
          </div>
          <div className="dashboard-head-bottom-right-data">
            <Typography className="dashboard-head-bottom-right-1">
              Total Number of products
            </Typography>
            <div className="dashboard-head-bottom-right-2">
              <Typography className="dashboard-head-bottom-right-21" style={{color: "#9A3DE4"}}>28</Typography>
              <Typography className="dashboard-head-bottom-right-22"></Typography>
            </div>
          </div>
          <div className="dashboard-head-bottom-right-data">
            <Typography className="dashboard-head-bottom-right-1">
            Total Number of campaigns
            </Typography>
            <div className="dashboard-head-bottom-right-2">
              <Typography className="dashboard-head-bottom-right-21" style={{color: "#9A3DE4"}}>4</Typography>
              <Typography className="dashboard-head-bottom-right-22"></Typography>
            </div>
          </div>
        </div>
        <div className="dashboard-head-bottom-right-bottom">
            <div className="dashboard-head-bottom-right-bottom-heading">Account Health Rating</div>
            <div className="dashboard-head-bottom-right-bottom-progress"></div>
            <div className="dashboard-head-bottom-right-bottom-view-report">View Report</div>
        </div>
      </div>
    </>
  );
}
