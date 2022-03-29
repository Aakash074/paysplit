import React, { Component, useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import {FAB} from 'react-native-paper';
import Contacts from "react-native-contacts";
import PaymentConfirmScreen from "../screens/PaymentConfirmScreen";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
function WalletScreen() {
  const navigation = useNavigation(); 
  const [contacts, setcontacts] = useState([]);
  const [data, setdata] = useState([])
  const [selectedContacts, setselectedContacts] = useState([]);
  useEffect(() => {
    
  });


  function removeDuplicateObjectFromArray(array, key) {
    var check = new Set();
    return array.filter(obj => !check.has(obj[key]) && check.add(obj[key]));
  }

  async function makingContactObj(contacts) {
    const realContacts = []
    // console.log("//////////////////////////////////////////////////////////////////" + contacts)
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].phoneNumbers[0] != undefined && contacts[i].displayName != undefined) {
        console.log(contacts[i].phoneNumbers[0].number)
        console.log("//////")
        
          if (contacts[i].phoneNumbers[0].number.length > 10) {
            contacts[i].phoneNumbers[0].number = contacts[i].phoneNumbers[0].number.substring(3, 13); 
            console.log(contacts[i].phoneNumbers[0].number) }
        if(contacts[i].phoneNumbers[0].number.length==10)
        realContacts.push({
          // id: i,
          phone: contacts[i].phoneNumbers[0].number,
          name: contacts[i].displayName,
        })
        console.log(contacts[i].phoneNumbers[0].number)
      }
    }
    // console.log("....................................................................realcontacts" + JSON.stringify(realContacts))
    return realContacts
}

   async function removeDuplicateObjectFromArray(array, key) {
    var check = new Set();
    return array.filter((obj) => !check.has(obj[key]) && check.add(obj[key]));
  }
  
  const fetchcontacts = async () => {
    
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    const contactslist = await Contacts.getAll().then(async (fcontacts) => {
      console.log("contact list \n" + fcontacts.length)
      
      const rcontacts = await makingContactObj(fcontacts)
      console.log(rcontacts.length) //113
      const filtered = await removeDuplicateObjectFromArray(rcontacts,'phone')
     console.log(filtered.length) //111
      // console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;" + JSON.stringify(rcontacts))
      // const removedDuplicate = removeDuplicateObjectFromArray(contacts, 'displayName')
      // console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;" + JSON.stringify(removedDuplicate))

      //   damncontacts = rcontacts.filter(function (value, index, arr) {
      //   if (
      //     value.phone != undefined &&
      //     value.displayName != undefined
      //   )
      //     return value;
      //   else return;
      // });
      // rcontacts
      // setcontacts(rcontacts);
      // console.log("filtering........................................")
      // console.log(rcontacts)
      console.log("filteredddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"+JSON.stringify(filtered))
      return filtered
      // console.log(contacts)
    })

    // console.log(contactslist)
    setcontacts(contactslist)
    return contactslist
   
  };



  const postExample = async () => {
    console.log("posting")
    // const filteredcontacts =  Contacts.getAll().then(async (fcontacts) => {
    //   let filtered = [];
    //   const removeduplicate = await removeDuplicateObjectFromArray(
    //     fcontacts,
    //     "displayName"
    //   );
    //   const removeduplicate2 = await removeDuplicateObjectFromArray(
    //     removeduplicate,
    //     "phone"
    //   );
    //  filtered = removeduplicate.filter(function (value, index, arr) {
    //     if (
    //       value.phoneNumbers[0] != undefined &&
    //       value.displayName != undefined
    //     )
    //       return value;
    //     else return;
    //   });
    //   // setcontacts(filtered);
    //   console.log("filtering")
    //   return filtered;
    // });
    // const fetchcontacts = fetchcontacts()
    // console.log(contacts)
    const data = { contacts: contacts }
    console.log(data.contacts.length)
    axios.post('http://ec2-3-108-56-123.ap-south-1.compute.amazonaws.com/api/contactsync', data, {
      headers: {
        // 'application/json' is the modern content-type for JSON, but some
        // older servers may use 'text/json'.
        // See: http://bit.ly/text-json
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }).then(res => setdata(res.data));
    
      
    }
  
  return (
    <View>
      <Button onPress={()=>fetchcontacts()} title="update"/>
      <Button onPress={()=>postExample()} title="send to server"/>
    <ScrollView style={{ margin: 30 }}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Text style={{ fontSize: 30, paddingBottom: 20 }}>Demos</Text>
      </View>
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>MultiSelect Demo</Text>
      {data.map(({ phone, name }) => (
        <View key={phone} style={{display:"flex", flexDirection:"row"}}>
          <CheckBox
            disabled={false}
            value={
              selectedContacts.find(
                (number) => number == phone
              )
                ? true
                : false
            }
            onValueChange={() =>
              selectedContacts.find(
                (number) => number == phone
              )
                ? setselectedContacts(
                    selectedContacts.filter(
                      (number) => number != phone
                    )
                  )
                : setselectedContacts([
                    ...selectedContacts,
                    phone,
                  ])
            }
          />
          <Text>{name}</Text>
        </View>
      ))}
      </ScrollView>
    
   
      <FAB
      style={styles.fab}
      uppercase={false}
      label={"Next"}
      icon="plus"
      onPress={() => 
        navigation.navigate('PaymentConfirmScreen')
      }
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 25,
    right: 0,
    bottom: 0,
  },
});


export default WalletScreen;
