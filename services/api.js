// HomePage.js
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel'; // Correct import

const { width } = Dimensions.get('window');

const HomePage = () => {
  const [userName] = useState('John Doe');
  const [searchQuery, setSearchQuery] = useState('');
  const carouselRef = useRef(null);

  const carouselData = [
    { image: require('../assets/image1.png') },
    { image: require('../assets/image2.png') },
    { image: require('../assets/image3.png') },
  ];

  const renderCarouselItem = ({ item }) => (
    <Image source={item.image} style={styles.bannerImage} />
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.greeting}>Hi {userName}!</Text>
        <Ionicons name="notifications-outline" size={28} color="#333" />
      </View>

      <Text style={styles.tagline}>Bringing the Church closer to you!</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search for an appointment..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Carousel
        ref={carouselRef}
        data={carouselData}
        renderItem={renderCarouselItem}
        sliderWidth={width}
        itemWidth={width - 40}
        loop
        autoplay
        autoplayInterval={5000}
      />

      <Text style={styles.sectionTitle}>Our Services</Text>
      <View style={styles.servicesContainer}>
        {services.map((service, index) => (
          <TouchableOpacity key={index} style={styles.serviceTile}>
            <Ionicons name={service.icon} size={32} color="#4CAF50" />
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const services = [
  { title: 'Book an Appointment', description: 'Schedule with coordinators.', icon: 'calendar-outline' },
  { title: 'Request Certificate', description: 'Request church certificates.', icon: 'document-text-outline' },
  { title: 'Submit Prayer Intention', description: 'Share your intentions.', icon: 'heart-outline' },
  { title: 'Donate to Church', description: 'Support through donations.', icon: 'cash-outline' },
];

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    elevation: 2,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceTile: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  serviceDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
});

export default HomePage;
