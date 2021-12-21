import { StatusBar } from 'expo-status-bar'; //status of watch, wifi, battery
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style ={{flexDirection:"row"}}> 
      <View style={{width:100, height:100, backgroundColor:"tomato"}}> </View>
      <View style={{width:100, height:100, backgroundColor:"teal"}}> </View>
      <View style={{width:100, height:100, backgroundColor:"orange"}}> </View>

      <Text>Hel..lo! </Text>
      <StatusBar style="auto" />
    </View>
  );
}
//create object of styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
