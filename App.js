import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import FishCard from './components/FishCard';

export default function App() {
  var fishCards = [];
  const maxFish = 80;

  for (let i = 1; i <= maxFish; i++) {
    fishCards.push(
      <FishCard id={i}/>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Animal{'\n'}Crossing</Text>
      </View> 
      <ScrollView style={{width: "100%"}}>
        { fishCards }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width:"100%",
    height: "15%",
    backgroundColor: "#786951",
    justifyContent: 'center',
    alignItems:'center',
    borderBottomColor:"#5C513E",
    borderRightColor: "#5C513E",
    borderLeftColor: "#8f7d61",
    borderTopColor: "#8f7d61",
    borderWidth: 5,
    paddingTop: 20
  },
  headerText: {
    fontSize: 40,
    color: '#F1C232',
    textShadowColor:'#000',
    textShadowRadius: 10,
    textAlign: 'center'
  },
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: '#F8EEBC',
    alignItems: 'center',
  },
});
