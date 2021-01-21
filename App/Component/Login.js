import React from 'react';
import { Button, StyleSheet, View,Image,Text } from 'react-native';

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

const LoginPage = ({login}) => {
  return (<>
    <View style={{flex: 1, flexDirection: 'column'}}>
    <Image
     style={{ width:400 ,height:300,alignSelf:'center'}}
          source={require('../../ClarkWater.png')}
        />
    <Text>

    </Text>
      </View>
    <View style={{flex: 1, flexDirection: 'column'}}>

    <Button
        style={styles.button}
        testID="loginButton"
        // onPress={async () => { this.login() }}
        onPress={() => login()}
        title="Login"
      />
    </View>
  </>
  );
};




export default LoginPage;
