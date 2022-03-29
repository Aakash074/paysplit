import React from 'react';
import {View, Text, Button, FAB } from 'react-native';
import RNUpiPayment from 'react-native-upi-payment';
import { NativeModules } from 'react-native';

const UpiModule = NativeModules.UpiPayment;
const UPIpay = (props) => {

    function successCallback(data) {
        // do whatever with the data
        console.log(data)
      }
      
      function failureCallback(data) {
        // do whatever with the data
        console.log(data)
          
  }
  
  // const successCallback = (success) => {
  //   return (data) => {
  //     data = JSON.parse(data);
  //     const successString = data.nameValuePairs && data.nameValuePairs.message;
  //     let successObj = this.convertStringToObject(successString);
  //     successObj.status = data.status;
  //     success(successObj);
  //   };
  // }

  // const failureCallback = (failure) => {
  //   return (data) => {
  //     data = JSON.parse(data);
  //     let failureObj = {};

  //     if (typeof (data.nameValuePairs.message) == "undefined") {
  //       failure(data.nameValuePairs);
  //     }
  //     else {
  //       const failureString = data.nameValuePairs && data.nameValuePairs.message;
  //       if (failureString === this.UPI_APP_NOT_INSTALLED ||
  //         failureString === this.REQUEST_CODE_MISMATCH ||
  //         failureString === this.NO_ACTION_TAKEN
  //       ) {
  //         failure(data.nameValuePairs);
  //       } else {
  //         failureObj = this.convertStringToObject(failureString);
  //         failure(failureObj);
  //       }
  //     }
  //   };
  // }

    return (
        <View style={{flex:1, backgroundColor:'lightblue', justifyContent:'center', alignItems:'center'}}>
            <Text>You are paying to</Text>
            <Text>{props.route.params.data.payeeName}</Text>
            <Text>${props.route.params.data.amount }</Text>
            <Button onPress={()=>{
                RNUpiPayment.initializePayment({
                    vpa: props.route.params.data.vpa, // or can be john@ybl or mobileNo@upi
                    payeeName: props.route.params.data.payeeName,
                    amount: props.route.params.data.amount,
                    transactionRef: 'aasf-132-mori-fn'
                  }, successCallback, failureCallback);
                // const upiConfig = {}
                // upiConfig.upiString = `upi://pay?pa=paytmqr2810050501011wm6vuqco6jd@paytm&pn=Paytm%20Merchant&mc=5499&mode=02&orgid=000000&paytmqr=2810050501011WM6VUQCO6JD`;
                // UpiModule.intializePayment(upiConfig, successCallback(), failureCallback());
            }} title="Pay with GUPI"/>
        </View>
    )
}

export default UPIpay;