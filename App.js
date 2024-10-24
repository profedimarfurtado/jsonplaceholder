import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen'
import PostsScreen from './screens/PostsScreen'
import CommentsScreen from './screens/CommentsScreen'
import UsersScreen from './screens/UsersScreen'
import PostCommentsScreen from './screens/PostCommentsScreen'
import UserDetailsScreen from './screens/UserDetailsScreen';
import EditPostScreen from './screens/EditPostScreen';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="PostComments" component={PostCommentsScreen} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
        <Stack.Screen name="EditPost" component={EditPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )


}