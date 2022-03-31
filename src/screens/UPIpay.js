import React from 'react';
import {View, Text, Button, FAB } from 'react-native';
import RNUpiPayment from 'react-native-upi-payment';
import { NativeModules } from 'react-native';

const UpiModule = NativeModules.UpiPayment;
const UPIpay = (props) => {
console.log(JSON.stringify(props))
    function successCallback(data) {
        // do whatever with the data
        console.log(data)
      }
      
      function failureCallback(data) {
        // do whatever with the data
        console.log(data)
          
  }
  


    return (
        <View style={{flex:1, backgroundColor:'lightblue', justifyContent:'center', alignItems:'center'}}>
            <Text>You are paying to</Text>
            {/* <Text>{props.route.params.data.payeeName}</Text> */}
            <Text>${props.route.params.Amount }</Text>
            <Button onPress={()=>{
                // RNUpiPayment.initializePayment({
                //     vpa: props.route.params.data.vpa, // or can be john@ybl or mobileNo@upi
                //     payeeName: props.route.params.data.payeeName,
                //     amount: props.route.params.data.amount,
                //     transactionRef: 'aasf-132-mori-fn'
                //   }, successCallback, failureCallback);
          const upiConfig = {}
          console.log(JSON.stringify(props.route.params.uri)+"this is params")
          console.log(JSON.stringify(props.route.params.ScanResult + "this is scanresult"))
          
                // upiConfig.upiString = `upi://pay?pa=paytmqr2810050501011wm6vuqco6jd@paytm&pn=Paytm%20Merchant&mc=5499&mode=02&orgid=000000&paytmqr=2810050501011WM6VUQCO6JD&am=24`;
          const uripart1 = props.route.params.ScanResult != undefined ? props.route.params.ScanResult.data : props.route.params.uri
          const uripart2 = props.route.params.Amount ? `&am=${props.route.params.Amount}` : ``
          console.log("uri part1" + uripart1)
          console.log("uri part2" + uripart2)
          console.log(uripart2+uripart1)
          upiConfig.upiString = uripart1+uripart2;
          console.log(JSON.stringify(upiConfig)+"upiconfig")
          
                UpiModule.intializePayment(upiConfig, successCallback(), failureCallback());
            }} title="Pay with GUPI"/>
        </View>
    )
}

export default UPIpay;