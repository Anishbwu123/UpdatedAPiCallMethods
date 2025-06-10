import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BuyerInfoCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.leftContent}>
        <Image
          source={require('../../../Assets/Images/sellericon.png')} 
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.buyerName}>Buyer name</Text>
          <Text style={styles.buyerEmail}>johndeo00@example.com</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.messageIconContainer}>
        <Image
          source={require('../../../Assets/Images/chat.png')} 
          style={styles.messageIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5', // A light grey background similar to the image
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 10, // Add some horizontal margin if needed
  
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5, // Half of width/height for a perfect circle
    marginRight: 15,
    backgroundColor: '#D5F5FF', // Placeholder background for the avatar if image not loaded
  },
  textContainer: {
    // No specific styles needed here, children will flow naturally
  },
  buyerName: {
    fontSize: 18,
    fontWeight: '600', // Semi-bold
    color: '#333', // Darker text color
    marginBottom: 2,
  },
  buyerEmail: {
    fontSize: 14,
    color: '#888', // Lighter text color for email
  },
  messageIconContainer: {
    padding: 8, // Add padding around the icon for easier touch
  },
  messageIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain', // Ensure the icon scales correctly
    tintColor: '#00BFFF', // A blue color similar to the image
  },
});

export default BuyerInfoCard;