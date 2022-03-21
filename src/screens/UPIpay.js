import React from 'react';
import {View, Text, Button } from 'react-native';
import RNUpiPayment from 'react-native-upi-payment';
const UPIpay = () => {
    return (
        <View style={{flex:1, backgroundColor:'lightblue', justifyContent:'center', alignItems:'center'}}>
            <Text>Pay with GUPI</Text>
            <Button onPress={()=>{
                RNUpiPayment.initializePayment({
                    vpa: 'john@upi', // or can be john@ybl or mobileNo@upi
                    payeeName: 'John Doe',
                    amount: '1',
                    transactionRef: 'aasf-332-aoei-fn'
                  }, ()=>{console.log('success')}, ()=>{console.log('failure')});
            }} title="Pay with GUPI"/>
        </View>
    )
}

export default UPIpay;