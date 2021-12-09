import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import FishCard from './FishCard';

function FishPage() {
    var fishCards = [];
    const maxFish = 80;
  
    for (let i = 1; i <= maxFish; i++) {
      fishCards.push(
        <FishCard id={i}/>
      )
    }
  
    return (
      <View style={styles.fishContainer}>
        <ScrollView style={{width: "100%"}}>
            { fishCards }
            </ScrollView>
        </View>
    )
}

export default FishPage;

const styles = StyleSheet.create({
    fishContainer: {
        alignItems: 'center',
        backgroundColor: '#f8eebc'
    },
});