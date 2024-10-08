import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For storing user data
import BottomNavbar from '../components/BottomNavbar';
import Header from '../components/Header';
import * as ImagePicker from 'expo-image-picker'; // Image picker for profile picture

const Menu = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState(route.name);
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    profileImage: require('../image/profile.png'), // Default profile image
  });

  // Load user information from AsyncStorage
  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const storedName = await AsyncStorage.getItem('fullName');
        const storedEmail = await AsyncStorage.getItem('email');
        const storedProfileImage = await AsyncStorage.getItem('profileImage'); // Profile image URI

        setUserInfo({
          fullName: storedName || 'User',
          email: storedEmail || 'user@example.com',
          profileImage: storedProfileImage ? { uri: storedProfileImage } : require('../image/profile.png'),
        });
      } catch (error) {
        console.error('Error loading user info from AsyncStorage', error);
      }
    };

    loadUserInfo();
  }, []);

  // Function to handle profile image update
  const handleProfileImageChange = async () => {
    // Ask for permission to access gallery
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission to access gallery is required!');
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      try {
        // Save selected image URI to AsyncStorage and update UI
        await AsyncStorage.setItem('profileImage', result.uri);
        setUserInfo((prev) => ({ ...prev, profileImage: { uri: result.uri } }));
        Alert.alert('Profile image updated successfully!');
      } catch (error) {
        console.error('Error saving profile image', error);
      }
    }
  };

  // Handle Sign-Out
  const handleSignOut = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <Header />

      {/* Content Section */}
      <View style={styles.content}>
        <TouchableOpacity onPress={handleProfileImageChange}>
          <Image source={userInfo.profileImage} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.profileName}>{userInfo.fullName}</Text>
        <Text style={styles.profileEmail}>{userInfo.email}</Text>

        <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert('Messaging Admin...')}>
          <Ionicons name="chatbubble-outline" size={24} color="#666" />
          <Text style={styles.menuText}>Message Admin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleProfileImageChange}>
          <Ionicons name="person-outline" size={24} color="#666" />
          <Text style={styles.menuText}>Change Profile Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert('Generating Certificate...')}>
          <Ionicons name="document-outline" size={24} color="#666" />
          <Text style={styles.menuText}>Generate Certificate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Ionicons name="log-out-outline" size={24} color="#666" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navbar */}
      <BottomNavbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EBD7BF',
    width: '100%',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#666',
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  signOutText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
});

export default Menu;
