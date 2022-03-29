import React, { useEffect } from "react";
import Providers from "./src/navigation";
import firebase from "react-native-firebase";
import messaging from "@react-native-firebase/messaging";
import UPIpay from "./src/screens/UPIpay";
import axios from "axios"
export default function App() {
  const checkper = async function checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      // getToken();
      console.log("Permission Granted");
    } else {
      // requestPermission();
      console.log("Permission Denied");
    }
  };

  useEffect(() => {
    checkper();
    // createNotificationLnrs();
  }, []);

  



    

   
    // const createNotificationLnrs = async function createNotificationListeners() {
    //   /*
    //    * Triggered when a particular notification has been received in foreground
    //    * */
    //   notificationListener = firebase
    //     .notifications()
    //     .onNotification((notification) => {
    //       const { title, body } = notification;
    //       console.log(title);
    //       // showAlert(title, body);
    //     });

    //   /*
    //    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    //    * */
    //   notificationOpenedListener = firebase
    //     .notifications()
    //     .onNotificationOpened((notificationOpen) => {
    //       const { title, body } = notificationOpen.notification;
    //       // showAlert(title, body);
    //       console.log(title);
    //     });

    //   /*
    //    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    //    * */
    //   const notificationOpen = await firebase
    //     .notifications()
    //     .getInitialNotification();
    //   if (notificationOpen) {
    //     const { title, body } = notificationOpen.notification;
    //     // showAlert(title, body);
    //     console.log(title);
    //   }
    //   /*
    //    * Triggered for data only payload in foreground
    //    * */
    //   messageListener = firebase.messaging().onMessage((message) => {
    //     //process data message
    //     console.log(JSON.stringify(message));
    //   });
    // };

    return <Providers />;
  

}