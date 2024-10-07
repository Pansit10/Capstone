import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import About from '../components/About';
import MassSchedule from '../components/MassSchedule';
import Event from '../components/Event';
import Footer from '../components/Footer';
import BottomNavbar from '../components/BottomNavbar';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.welcomeText}>
          Welcome to Blessed Virgin Mary, Queen of The World Parish
        </Text>
        <About />
        <MassSchedule />
        <Event />
        <Footer />
      </ScrollView>

      {/* Bottom Navbar */}
      <BottomNavbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    paddingBottom: 80,
    paddingHorizontal: 15,
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A5D43',
    marginVertical: 20,
  },
});

export default HomePage;
