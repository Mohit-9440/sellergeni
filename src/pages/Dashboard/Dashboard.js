import React, { useEffect, useState } from "react";
import "./dashboard.css";
import DashBoardHead from "../../components/DashboardHead/DashBoardHead";
import DashBoardOrderSales from "../../components/DashboardOrderSales/DashBoardOrderSales";
import BudgetGrowth from "../../components/BudgetGrowth/BudgetGrowth";
import BrandStore from "../../components/BrandStore/BrandStore";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Support from "../../components/Support/Support";
import AccordionT from "../../components/NestedAccordion/AccordionT";
import Footer from "../../components/footer/Footer";
import CircleFollowMouse from "../../components/CircleFollowMouse";
import ScrollButton from "../../components/ScrollButton";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <CircleFollowMouse className="CircleFollowMouse"/>
      <div className="dashboard-main">
        <section className="dashboard-head">
          <div className="dashboard-head-top-wrapper">
            <DashBoardHead />
          </div>
          <div className="dashboard-head-bottom-wrapper">
            <DashBoardOrderSales />
          </div>
        </section>
        <section className="dashboard-middle">
          <div className="dashboard-middle-first-wrapper">
            <BudgetGrowth />
          </div>
          <div className="dashboard-middle-second-wrapper">
            <BrandStore />
          </div>
          <div className="dashboard-middle-third-wrapper">
            <OrderSummary />
          </div>
        </section>
        <section className="dashboard-bottom">
          <Support />

          {/* <AccordionT/> */}
        </section>
        <section className="dashboard-last">
          <Footer/>
        </section>
        <ScrollButton className="scroll--button"/>
      </div>
    </div>
  );
}
