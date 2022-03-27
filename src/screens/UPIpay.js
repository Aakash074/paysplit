import React from 'react';
import {View, Text, Button, FAB } from 'react-native';
import RNUpiPayment from 'react-native-upi-payment';
const UPIpay = (props) => {
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
                    transactionRef: 'aasf-332-aoei-fn'
                  }, ()=>{console.log('success')}, ()=>{console.log('failure')});
            }} title="Pay with GUPI"/>
        </View>
    )
}

export default UPIpay;