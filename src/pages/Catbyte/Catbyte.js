import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
//import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import CardList from '../../components/CardList/CardList';

import styles from './Catbyte.style';

const Catbyte =() => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  async function fetchData() {
    
    const response = await axios.get(
      'https://dummyjson.com/users'
    );
    setLoading(false);
    setData(response.data.users);
  }

  const renderEarthquake = ({item}) =>
    (
      <CardList 
        firstName = {item.firstName}
        age = {item.age}
        uri = {item.image}
      />
    );
    
    useEffect(() => {
      fetchData();
    }, []);
 

  return (
    <SafeAreaView style={styles.container}>
      
          
      <View style={styles.flatView}>
        {loading ? (
          <ActivityIndicator size="large"/>
        ) : (
          <FlatList 
          data={data} 
          scrollEnabled={true}
          style={{ margin: 5}}
          numColumns={2}
          renderItem={renderEarthquake}/>
        )}
        
      </View>
      <TouchableOpacity style={{backgroundColor: 'white', borderRadius:50, borderWidth: 0.5, borderColor:'#ec8d53', width: 100, height:25, alignItems: 'center', marginLeft: 130}}>
        <Text style={{color: '#ec8d53', fontSize:18}}> Add </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Catbyte;
