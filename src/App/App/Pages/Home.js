import React from "react";

import "../App.css";

import { Header } from "../../Home/Components/Header";
import { Footer } from "../../Home/Components/Footer";

import { Menu } from "../Components/Menu";
import { Map } from "../Components/Map";
import { TimeTable } from "../Components/Timetable";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export function AppHome() {
    return (
        <>
            <section className="main-top">
                <Header />
                <div
                    className="main-top-content main-top-content-app"
                    style={{ textAlign: "start" }}
                >
                    <Menu />
                    <Map />
                    <TimeTable />
                </div>
            </section>
            <Footer />
        </>
    );
}