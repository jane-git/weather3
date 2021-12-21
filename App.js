import { StatusBar } from 'expo-status-bar'; //status of watch, wifi, battery
import React from "react";
import { StyleSheet, Text,View, ScrollView, Dimensions} from 'react-native';

const {width:SCREEN_WIDTH} = Dimensions.get('window');
console.log(SCREEN_WIDTH);
export default function App() {
  return (
    //layout size - To match the react/Adjust the size equally
    //default view : flex container
    //default of direction of flex container : column
    <View style ={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Brisbane</Text>
      </View>
      <ScrollView pagingEnabled horizontal contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>30</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>30</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>30</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>30</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}
//create object of styles
const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:"tomato"
  },
  city: {
    flex: 1.2,
    //backgroundColor:"blue",
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {
    //flex: 3,
   // backgroundColor: "skyblue",
  },
  day: {
    width: SCREEN_WIDTH,
   // flex:1,
    //justifyContent: "center",
    alignItems: "center",
   // backgroundColor: "teal",
  },
  temp:{
    marginTop: 50,
    fontSize: 170,
  },
  description:{
    marginTop: -30,
    fontSize: 60,
  },
});
