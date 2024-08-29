import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text, 
  View,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import patikaData from './patika_data.json';
import StoreCard from './components/NewsCard/StoreCard';

function App(){

  //const renderNews = ({item}) => <NewsCard news={item} />;  bu kullanım renderı gerektikçe yapılmasını sağlar sürekli çalışmasını önler.
   

  return(
    <SafeAreaView style={styles.container} >
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput
      style={styles.input}
      placeholder='Ara...'
      keyboardType='ascii-capable'
      />
      <FlatList
      
      keyExtractor={(item) => item.id.toString()}
      data={patikaData}
      renderItem={({item}) => <StoreCard news={item} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eceff1',
  },
  headerText:{
      fontWeight:'black',
      fontSize:50,
    },
    input:{
      height:40,
      borderWidth:1,
      borderRadius:10,
      margin:5,
      padding:10,
    }
})

export default App;