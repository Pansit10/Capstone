import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import BottomNavbar from '../../components/BottomNavbar';

const Profile = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({
    fullName: 'User Name',
    email: 'user@example.com',
    profileImage: require('../../assets/image/profile.png'),
  });

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const storedName = await AsyncStorage.getItem('fullName');
        const storedEmail = await AsyncStorage.getItem('email');
        const storedImageUri = await AsyncStorage.getItem('profileImage');

        setUserInfo({
          fullName: storedName || 'User Name',
          email: storedEmail || 'user@example.com',
          profileImage: storedImageUri
            ? { uri: storedImageUri }
            : require('../../assets/image/profile.png'),
        });
      } catch (error) {
        console.error('Error loading user info:', error);
      }
    };

    loadUserInfo();
  }, []);

  const handleProfileImageChange = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Gallery access is needed to change your profile picture.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      try {
        await AsyncStorage.setItem('profileImage', result.uri);
        setUserInfo((prev) => ({ ...prev, profileImage: { uri: result.uri } }));
        Alert.alert('Success', 'Profile picture updated!');
      } catch (error) {
        console.error('Error saving profile image:', error);
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Header */}
        <TouchableOpacity onPress={handleProfileImageChange}>
          <Image source={userInfo.profileImage} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.name}>{userInfo.fullName}</Text>
        <Text style={styles.email}>{userInfo.email}</Text>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.row} onPress={() => Alert.alert('Edit Profile')}>
            <Text style={styles.rowText}>Edit Profile</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#666" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.row} onPress={() => Alert.alert('Manage Payment')}>
            <Text style={styles.rowText}>Manage Payment</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <TouchableOpacity style={styles.row} onPress={() => Alert.alert('Notifications')}>
            <Text style={styles.rowText}>Notifications</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#666" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.row} onPress={() => Alert.alert('FAQs')}>
            <Text style={styles.rowText}>FAQs</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#666" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.row} onPress={() => Alert.alert('About Us')}>
            <Text style={styles.rowText}>About Us</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Ionicons name="log-out-outline" size={24} color="#F44336" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  content: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  rowText: {
    fontSize: 16,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E4E5',
    marginVertical: 5,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  signOutText: {
    fontSize: 18,
    color: '#F44336',
    marginLeft: 10,
  },
});

export default Profile;
