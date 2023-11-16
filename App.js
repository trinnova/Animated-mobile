import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Animacion1 from './components/Animacion1';

const App = () => {

  return (
    <>
      <View style={styles.contenido}>
        <Animacion1 
          
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create
(
  {
    contenido: {

    },

  }
);

export default App;
