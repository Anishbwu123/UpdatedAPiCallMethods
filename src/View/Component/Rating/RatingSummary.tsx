import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Or use any icon library
import LinearGradient from 'react-native-linear-gradient';

interface RatingData {
  star: number;
  count: number;
}

const TOTAL_REVIEWS = 50;

const ratings: RatingData[] = [
  { star: 5, count: 20 },
  { star: 4, count: 13 },
  { star: 3, count: 12 },
  { star: 2, count: 3 },
  { star: 1, count: 2 },
];

const RatingSummary = () => {
  const averageRating = (ratings.reduce((acc, r) => acc + r.star * r.count, 0) / TOTAL_REVIEWS).toFixed(1);
  const rounded = Math.ceil(parseInt(averageRating))
  const rat = new Array(rounded)
  console.log(rat.fill(19))

  const maxCount = Math.max(...ratings.map(r => r.count));

  return (
    <View style={styles.container}>
      {/* Overall Rating */}
      <View style={styles.header}>
        <View style={styles.starsRow}>
          {[...Array(5)].map((_, index) => (
            <Image source={require("../../../Assets/Images/star.png")} style={{width:30,height:30}}/>
          ))}
        </View>
        <Text style={styles.averageText}>{averageRating} <Text style={styles.reviewCount}>({TOTAL_REVIEWS} reviews)</Text></Text>
      </View>

      {/* Rating Bars */}
      {ratings.map(rating => {
        const barWidth = (rating.count / maxCount) * 100;

        return (
          <View key={rating.star} style={styles.barRow}>
            <LinearGradient
              colors={['#00BFFF', '#00E676']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.progressBar, { width: `${barWidth-10}%`,height: 10}]}
            />
            <View style={styles.barBackground} />
            <Text style={styles.starLabel}>{rating.star}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    padding: 16,
    borderRadius: 16,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    gap:4,
  },
  header: {
    marginBottom: 12,
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  averageText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  reviewCount: {
    fontWeight: 'normal',
    color: 'gray',
    fontSize: 14,
  },
  barRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 15,
    marginVertical: 6,
    // backgroundColor:"red",
    // padding: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
  },
  barBackground: {
    backgroundColor: '#EDEDED',
    flex: 1,
    height: 10,
    borderRadius: 5,
  },
  starLabel: {
    marginLeft: 8,
    width: 20,
    // fontSize:20,
    textAlign: 'center',
  },
});

export default RatingSummary;
