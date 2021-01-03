import React, {Component,Fragment, useState,useEffect} from 'react';
import {  Button, Text,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Login  from "./Component/Login";
import  Dashboard  from "./Component/Dashboard";
import { createConfig, signIn, signOut, isAuthenticated, getUser, getUserFromIdToken, EventEmitter } from '@okta/okta-react-native';

const Stack = createStackNavigator();

  export default class Route extends Component {
    constructor() {
      super();
      this.state = {
        authenticated: false,
        context: null,
      };
      this.checkAuthentication = this.checkAuthentication.bind(this);
    }
    async componentDidMount() {
      let that = this;
      EventEmitter.addListener('signInSuccess', function (e: Event) {
        that.setState({authenticated: true});
        that.setContext('Logged in!');
      });
      EventEmitter.addListener('signOutSuccess', function (e: Event) {
        that.setState({authenticated: false});
        that.setContext('Logged out!');
      });
      EventEmitter.addListener('onError', function (e: Event) {
        console.warn(e);
        that.setContext(e.error_message);
      });
      EventEmitter.addListener('onCancelled', function (e: Event) {
        console.warn(e);
      });
      await createConfig({
        clientId: configFile.oidc.clientId,
        redirectUri: configFile.oidc.redirectUri,
        endSessionRedirectUri: configFile.oidc.endSessionRedirectUri,
        discoveryUri: configFile.oidc.discoveryUri,
        scopes: configFile.oidc.scopes,
        requireHardwareBackedKeyStore: configFile.oidc.requireHardwareBackedKeyStore,
      });
      this.checkAuthentication();
    }
  
    componentWillUnmount() {
      EventEmitter.removeAllListeners('signInSuccess');
      EventEmitter.removeAllListeners('signOutSuccess');
      EventEmitter.removeAllListeners('onError');
      EventEmitter.removeAllListeners('onCancelled');
    }
  
    async componentDidUpdate() {
      this.checkAuthentication();
    }
  
    async checkAuthentication() {
      const result = await isAuthenticated();
      if (result.authenticated !== this.state.authenticated) {
        this.setState({authenticated: result.authenticated});
      }
    }
  
    async login() {
      signIn();
    }
  
    async logout() {
      signOut();
    }
  
    async getUserIdToken() {
      let user = await getUserFromIdToken();
      this.setContext(JSON.stringify(user, null, 2));
    }
  
    async getMyUser() {
      let user = await getUser();
      this.setContext(JSON.stringify(user, null, 2));
    }
  
    setContext = message => {
      this.setState({
        context: message,
      });
    };



  render (){
  return (
    <NavigationContainer>
          {/* Rest of your app code */}
          <Stack.Navigator  initialRouteName={this.state.authenticated ? 'Dashboard' : 'Login'}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
          <View>
            <Text>
            {/* {authenticated?"yes":"no"} */}
            </Text>
          </View>
        </NavigationContainer>
      )
    }

}

