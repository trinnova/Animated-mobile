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
import Animacion2 from './components/Animacion2';
import Animacion3 from './components/Animacion3';

const App = () => {

  return (
    <>
      <View style={styles.contenido}>
        <Animacion1 />
        <Animacion2 />
        <Animacion3 />
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
