import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import VillagerCard from './VillagerCard';

function VillagerPage() {
    var villagerCards = [];
    const maxVillager = 80;
  
    for (let i = 1; i <= maxVillager; i++) {
        villagerCards.push(
        <VillagerCard id={i}/>
      )
    }
  
    return (
      <View style={styles.fishContainer}>
        <ScrollView style={{width: "100%"}}>
            { villagerCards }
            </ScrollView>
        </View>
    )
}

export default VillagerPage;

const styles = StyleSheet.create({
    fishContainer: {
        alignItems: 'center',
        backgroundColor: '#f8eebc'
    },
});