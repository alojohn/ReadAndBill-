import React from 'react';
import { Button, StyleSheet, View,Text } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    width: 300,
    height: 40,
    marginTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

const HomePage = () => {
  return (<>

    <View style={{flex: 1, flexDirection: 'row'}}>

    <Text>
      My Home Page

    </Text>
    </View>
  </>
  );
};




export default HomePage;
