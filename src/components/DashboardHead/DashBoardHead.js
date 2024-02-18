import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { ReactComponent as DeclineCircle } from "../../assets/declineCircle.svg";
import jsonData1 from "../../data/performance.json";
import jsonData2 from "../../data/efficiency.json";
import jsonData3 from "../../data/awareness.json";

import "./dashboardhead.css";
import { GoArrowDown, GoArrowUp, GoArrowRight } from "react-icons/go";
export default function DashBoardHead() {
  const [performanceData, setPerformanceData] = useState([]);
  const [efficiencyData, setEfficiencyData] = useState([]);
  const [awarenessData, setAwarenessData] = useState([]);

  useEffect(() => {
    setPerformanceData(jsonData1);
    setEfficiencyData(jsonData2);
    setAwarenessData(jsonData3);
  }, []);
  return (
    <>
      <div className="dashboard-head-top head-performance">
        <div className="dashboard-head-top-head">
          <div className="dashboard-head-top-head-left">Performance</div>
          <div className="dashboard-head-top-head-right">
            <GoArrowRight color="#000" />
          </div>
        </div>
        <div className="dashboard-head-top-body">
          {performanceData.map((item) => (
            <div key={item.id} className="dashboard-head-top-body-data">
              <div className="dashboard-head-top-body-left">
                <Typography className="dashboard-head-top-head-left-1">
                  {item.name}
                </Typography>
                <Typography className="dashboard-head-top-head-left-2">
                  {item.value}
                </Typography>
                <Typography className="dashboard-head-top-head-left-3">
                  {item.content1.includes("-") ? (
                    <span
                      style={{
                        color: "#EE2222",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <GoArrowDown color="red" />
                      {item.content1}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "#EE2222",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <GoArrowUp color="red" />
                      {item.content1}
                    </span>
                  )}{" "}
                  vs last 7 days{" "}
                  <span style={{ color: "#000", fontWeight: "600" }}>
                    {item.content2}
                  </span>
                </Typography>
              </div>
              <div className="dashboard-head-top-body-right">
                <DeclineCircle />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dashboard-head-top head-efficiency">
        <div className="dashboard-head-top-head">
          <div className="dashboard-head-top-head-left">Efficiency</div>
          <div className="dashboard-head-top-head-right">
            <GoArrowRight color="#000" />
          </div>
        </div>
        <div className="dashboard-head-top-body">
          {efficiencyData.map((item) => (
            <div key={item.id} className="dashboard-head-top-body-data">
              <div className="dashboard-head-top-body-left">
                <Typography className="dashboard-head-top-head-left-1">
                  {item.name}
                </Typography>
                <Typography className="dashboard-head-top-head-left-2">
                  {item.value}
                </Typography>
                <Typography className="dashboard-head-top-head-left-3">
                  {item.content1.includes("-") ? (
                    <span
                      style={{
                        color: "#EE2222",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <GoArrowDown color="red" />
                      {item.content1}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "#EE2222",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <GoArrowUp color="red" />
                      {item.content1}
                    </span>
                  )}{" "}
                  vs last 7 days{" "}
                  <span style={{ color: "#000", fontWeight: "600" }}>
                    {item.content2}
                  </span>
                </Typography>
              </div>
              <div className="dashboard-head-top-body-right">
                <DeclineCircle />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dashboard-head-top head-awareness">
        <div className="dashboard-head-top-head">
          <div className="dashboard-head-top-head-left">Awareness</div>
          <div className="dashboard-head-top-head-right">
            <GoArrowRight color="#000" />
          </div>
        </div>
        <div className="dashboard-head-top-body">
          {awarenessData.map((item) => (
            <div key={item.id} className="dashboard-head-top-body-data">
              <div className="dashboard-head-top-body-left">
                <Typography className="dashboard-head-top-head-left-1">
                  {item.name}
                </Typography>
                <Typography className="dashboard-head-top-head-left-2">
                  {item.value}
                </Typography>
                <Typography className="dashboard-head-top-head-left-3">
                  {item.content1.includes("-") ? (
                    <span
                      style={{
                        color: "#EE2222",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <GoArrowDown color="red" />
                      {item.content1}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "#EE2222",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <GoArrowUp color="red" />
                      {item.content1}
                    </span>
                  )}{" "}
                  vs last 7 days{" "}
                  <span style={{ color: "#000", fontWeight: "600" }}>
                    {item.content2}
                  </span>
                </Typography>
              </div>
              <div className="dashboard-head-top-body-right">
                <DeclineCircle />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
