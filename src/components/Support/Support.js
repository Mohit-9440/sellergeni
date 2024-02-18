import { CiCircleQuestion } from "react-icons/ci";
import "./support.css";
import { GoArrowRight } from "react-icons/go";
export default function Support() {
  return (
    <>
      <div className="support">
        <div className="support-heading">
          Get started with support <CiCircleQuestion color="#a5a5a5" />
        </div>
        <div className="support-body-wrapper">
          <div className="support-body support-body-1">
            <div style={{ fontSize: "20px", fontWeight: "600", width: "70%" }}>
              Learn How to use GrowZ Autopilot efficiently
            </div>
            <div>
              <button className="support-button">
                Take Me <GoArrowRight />
              </button>
            </div>
          </div>
          <div className="support-body support-body-2">
            <div style={{ fontSize: "20px", fontWeight: "600", width: "70%" }}>
              Learn How to monitor Autopilot campaigns
            </div>
            <div>
              <button className="support-button">
                Take Me <GoArrowRight />
              </button>
            </div>
          </div>
          <div className="support-body support-body-3">
            <div style={{ fontWeight: "800", fontSize: "20px", width: "70%" }}>
              SellerGeni Connect
            </div>
            <div style={{ fontSize: "12px", color: "#a5a5a5", width: "80%" }}>
              Join our growing community of users, experts and support
              executives.
            </div>
            <div>
              <button className="support-button forum">
                Go To Support Forum <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
