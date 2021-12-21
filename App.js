import { StatusBar } from 'expo-status-bar'; //status of watch, wifi, battery
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    //layout size - To match the react/Adjust the size equally
    //default view : flex container.
    <View style ={{flex:1}}> 
      <View style={{flex:1, backgroundColor:"tomato"}}> </View>
      <View style={{flex:1, backgroundColor:"teal"}}> </View>
      <View style={{flex:1, backgroundColor:"orange"}}> </View>

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
