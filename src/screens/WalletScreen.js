import React, {Component, useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import Contact from './Contacts';
import MultiSelect from 'react-native-multiple-select';

export default class WalletScreen extends Component{

  constructor(props) {
    super(props)
    this.state =  {
      contacts: [],
      selectedItems: [],
      contactsarr:[]
    };
  }
  
 
  
  // const [contacts, setContacts] = useState([]);
  

  fetchcontacts = () => {
     

    Contacts.getAll().then(contacts => {
      this.setState({
        contacts: contacts,
        selectedItems: this.state.selectedItems,
      });
      console.log("new logs")
      // for (var i = 1; i < contacts.length; i++){
      //   if (contacts[i].phoneNumbers.length&&contacts[i].phoneNumbers[0].number.length>9) {
          
      //     // console.log(i+ " " + contacts[i].phoneNumbers[0].number + "--" + contacts[i].displayName)
          
      //   }
       
      // }

      for (let i = 0; i < contacts.length; i++) {
     
        if (this.state.contacts[i].phoneNumbers[0]!=undefined &&  this.state.contacts[i].displayName!=undefined ) {
          // contactsObj[this.state.contacts[i].phoneNumbers[0].number] = this.state.contacts[i].displayName
       
          this.state.contactsarr.push({
            id: i,
            phone: this.state.contacts[i].phoneNumbers[0].number,
            name: this.state.contacts[i].displayName
          })
      }
    // if(i==this.state.contacts.length)
    }
    })
    
  }

  componentDidMount() {
    this.fetchcontacts()
  }


 

  // contactsObj = {}
  makeobj = () => {
     console.log(this.state.contacts.length)
    
    
    // console.log("contacts object " + JSON.stringify(contactsObj))
  }
  
  onSelectedItemsChange = selectedItems => {
    this.setState({
      contacts : this.state.contacts,
      selectedItems: selectedItems,
  

    });
  };



  //  addcontacts = (contact) =>{
  //   selectedcontacts.push(contact)
  // }
  //  keyExtractor = (item, idx) => {
  //   return item?.recordID?.toString() || idx.toString();
  // };
  //  renderItem = ({item, index}) => {
  //   return <Contact contact={item} addcontacts={addcontacts} selectedcontacts={ selectedcontacts}/>;
  // };

  render() {
    
 
    const { selectedItems } = this.state;
    console.log(this.state.contactsarr + "ssssssssssss")
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={this.state.contactsarr}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
      
      </View>
    );
  }
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});