import { CiCircleQuestion } from "react-icons/ci";
import "./budgetgrowth.css";
import { FaCircle, FaRegSquareCheck, FaSquare } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 2,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
export default function BudgetGrowth() {
  return (
    <>
      <div className="budget-report">
        <div className="budget-report-heading">
          Budget Report
          <CiCircleQuestion color="#a5a5a5" />
        </div>
        <div className="budget-report-box">
          <div className="budget-report-box-head">
            <div className="budget-report-box-head-left">
              Budget Utilization (%)
            </div>
            <div className="budget-report-box-head-right">Campaign Count</div>
          </div>
          <div className="budget-report-box-body">
            <div className="budget-report-box-body-data">
              <div className="budget-report-box-body-left">90-100%</div>
              <div className="budget-report-box-body-right">2</div>
            </div>
            <div className="budget-report-box-body-data">
              <div className="budget-report-box-body-left">80-90%</div>
              <div className="budget-report-box-body-right">1</div>
            </div>
            <div className="budget-report-box-body-data">
              <div className="budget-report-box-body-left">20-80%</div>
              <div className="budget-report-box-body-right">5</div>
            </div>
            <div className="budget-report-box-body-data">
              <div className="budget-report-box-body-left">0-20%</div>
              <div className="budget-report-box-body-right">1</div>
            </div>
          </div>
          <div className="budget-report-box-bottom">
            <GoArrowRight />
            View Campaigns
          </div>
        </div>
      </div>
      <div className="growth-report">
        <div className="growth-report-heading">
          Growth Readiness Report
          <CiCircleQuestion color="#a5a5a5" />
        </div>
        <div className="growth-report-box">
          <div className="growth-report-box-head">
            <div className="growth-report-box-head-con">
              20%{" "}
              <span style={{ fontSize: "12px", fontWeight: "500" }}>
                growth readiness
              </span>
            </div>
          </div>
          <div className="growth-report-box-progress">
            {" "}
            <BorderLinearProgress variant="determinate" value={20} />
          </div>
          <div className="growth-report-box-body">
            <div className="growth-report-box-body-data">
              <div className="growth-report-box-body-left">
                <FaCircle color="green" />
                Are Sponsored Product Ads running?
              </div>
              <div className="growth-report-box-body-right">
                <FaRegSquareCheck color="#9A3DE4" />
              </div>
            </div>
            <div className="growth-report-box-body-data">
              <div className="growth-report-box-body-left">
                <FaCircle color="red" />
                Are Sponsored Brand Ads running?
              </div>
              <div className="growth-report-box-body-right">
                <FaSquare color="#d9d9d9" />
              </div>
            </div>
            <div className="growth-report-box-body-data">
              <div className="growth-report-box-body-left">
                <FaCircle color="red" />
                Are Sponsored Brand Video Ads running?
              </div>
              <div className="growth-report-box-body-right">
                <FaSquare color="#d9d9d9" />
              </div>
            </div>
            <div className="growth-report-box-body-data">
              <div className="growth-report-box-body-left">
                <FaCircle color="red" />
                Are Sponsored Display Ads running?
              </div>
              <div className="growth-report-box-body-right">
                <FaSquare color="#d9d9d9" />
              </div>
            </div>
            <div className="growth-report-box-body-data">
              <div className="growth-report-box-body-left">
                <FaCircle color="red" />
                Do you have an active Store on Amazon
              </div>
              <div className="growth-report-box-body-right">
                <FaSquare color="#d9d9d9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
