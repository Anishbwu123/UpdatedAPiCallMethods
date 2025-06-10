import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Comment = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>AD</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Amanda Doe</Text>
          <View style={styles.starSection}>
            {/* Replace with your filler image for stars */}
            <Image
              source={require("../../Assets/Images/star.png")} // Example placeholder
              style={styles.starImage}
            />
            <Text style={styles.starText}>4.8 Stars</Text>
          </View>
        </View>
        <View style={styles.commentIconContainer}>
          {/* Replace with your filler image for the comment icon */}
          <Image
            source={require("../../Assets/Images/chat.png")} // Example placeholder
            style={styles.commentImage}
            resizeMode='contain'
          />
        </View>
      </View>
      <Text style={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginVertical:10,
    marginHorizontal:"auto",
    // margin: 20, // Added margin for better visibility if used in a list
    // shadowColor: '#000',
    borderWidth:1,
    borderColor:"#EEEEEE",
    // shadowOpacity: 0.1,
    // shadowRadius: 3.84,
    // elevation: 5, // For Android shadow
    width: 350, // Adjusted width based on the image
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25, // Half of width/height to make it a circle
    backgroundColor: '#00E676', // Bright green
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  userInfo: {
    flex: 1, // Takes remaining space
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 2, // Small space between name and stars
  },
  starSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starImage: {
    width: 24, // Adjust as per your filler image aspect ratio
    height: 24, // Adjust as per your filler image aspect ratio
    marginRight: 4,
  },
  starText: {
    fontSize: 16,
    color: '#757575',
  },
  commentIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 20, // Half of width/height
    // backgroundColor: '#18BFFF', // Light blue
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8, // Padding around the image if needed
  },
  commentImage: {
    width: "100%", // Adjust as per your filler image
    height: "100%", // Adjust as per your filler image
  },
  bodyText: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 22, // Improved line height for readability
  },
});

export default Comment;

// To use this component in your App.js or any other screen:
//
// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import TestimonialCard from './TestimonialCard'; // Adjust path if needed
//
// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <TestimonialCard />
//     </SafeAreaView>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f2f5', // Optional background for the screen
//   },
// });
//
// export default App;