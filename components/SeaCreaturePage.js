import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import SeaCreatureCard from './SeaCreatureCard';

function SeaCreaturePage() {
    var seaCreatureCards = [];
    const maxSeaCreature = 40;
  
    for (let i = 1; i <= maxSeaCreature; i++) {
      seaCreatureCards.push(
        <SeaCreatureCard id={i}/>
      )
    }
  
    return (
      <View style={styles.fishContainer}>
        <ScrollView style={{width: "100%"}}>
            { seaCreatureCards }
            </ScrollView>
        </View>
    )
}

export default SeaCreaturePage;

const styles = StyleSheet.create({
    fishContainer: {
        alignItems: 'center',
        backgroundColor: '#f8eebc'
    },
});