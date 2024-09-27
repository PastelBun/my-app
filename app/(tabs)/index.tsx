import { Image, StyleSheet, Platform } from 'react-native';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aura</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});
