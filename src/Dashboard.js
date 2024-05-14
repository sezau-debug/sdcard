import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import home from './home';
import search from './search';
import page from './page';
import Setting from './setting';
const Tab = createBottomTabNavigator();
const AdminPanelHeader = () => {
  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.userName}>Sejal Eksria</Text>
        </View>
        <Image source={require('./assets/Snapchat-1305087401 (1).jpg')} style={styles.userImage} />
      </View>
      <Tab.navigator
       screenOptions={{
        headerShown: false
      }}
       >
          <Tab.Screen
            name="Home"
            component={home}
            options={{
              tabBarIcon: () => (
                <Image source={require('./assets/home.png')} style={styles.tabIcon} />
              ),
            }}
          />
          <Tab.Screen
            name="user"
            component={search}
            options={{
              tabBarIcon: () => (
                <Image source={require('./assets/user.png')} style={styles.tabIcon} />
              ),
            }}
          />
          <Tab.Screen
           name="Page"
           component={page}
           options={{
             tabBarIcon: () => (
               <Image source={require('./assets/page.png')} style={styles.tabIcon} />
             ),
           }}
          />
          <Tab.screen
           name="Setting"
           component={Setting}
           options={{
             tabBarIcon: () => (
               <Image source={require('./assets/sett.png')} style={styles.tabIcon} />
             ),
           }}
          />
        </Tab.navigator>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    paddingVertical: 150,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  welcomeText: {
    color: '#555',
    fontSize: 13,                                             
    fontWeigth:'bold', 
  },
  userName: {
    fontSize: 180,
    fontWeight: 'bold', 
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius:50,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  screenText: {
    fontSize: 180,
    fontWeight: 'bold',
    color: '#333',
  },
 
  tabIcon: {
    width: 25,
    height: 25
    ,
  }
});

export default AdminPanelHeader;
