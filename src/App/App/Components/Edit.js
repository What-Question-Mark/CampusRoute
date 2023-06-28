import React from "react";
import { Icon } from "@iconify/react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import { Menu } from "./Menu";

import styles from "../App.module.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
    apiKey: "AIzaSyAeeTvV_czzoX_qxVOgRMxrE1aNEo6SMgQ",
    authDomain: "campusroute-ca268.firebaseapp.com",
    projectId: "campusroute-ca268",
    storageBucket: "campusroute-ca268.appspot.com",
    messagingSenderId: "164037552565",
    appId: "1:164037552565:web:e64461bee2e260d57191fc",
    measurementId: "G-7GN7W7HW1C",
});

const auth = firebase.auth();

export function Edit() {
    const [user] = useAuthState(auth);

    return (
        <div
            className={styles["app-top-content"]}
            style={{ textAlign: "start" }}
        >
            <Menu/>
            <div className={`${styles["app-box"]} ${styles["edit"]}`}></div>
            <div className={`${styles["app-box"]} ${styles["edit"]}`}></div>
        </div>
    );
}
