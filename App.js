import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { PrayerScreen } from './screens/PrayerScreen';
import {AddPrayerRequest} from './components/AddPrayerRequest';
import { SendNotification } from './components/SendNotification';
import NotificationScreen from './screens/NotificationScreen';
import AnnouncementScreen from './screens/AnnouncementScreen';
import { AdminPage } from './components/AdminPage';


const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen 
              name="PrayerScreen" 
              component={PrayerScreen} 
              options={{ title: 'Prayer List' }}
            />
            <Stack.Screen 
              name="NotificationScreen"
              component={NotificationScreen}
              options={{ title: 'Notifications' }}
            />
            <Stack.Screen 
              name="AnnouncementScreen"
              component={AnnouncementScreen}
              options={{ title: 'Announcements' }}
            />
            <Stack.Screen 
              name="PostMessage"
              component={AdminPage}
              options={{ title: 'New Notification' }}
            />
            <Stack.Screen 
              name="AddPrayerRequest"
              component={AddPrayerRequest}
              options={{ title: 'Add To Prayer List' }}
            />
            <Stack.Screen 
              name="SendNotification"
              component={SendNotification}
              options={{ title: 'Send New Notification' }}
            />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
