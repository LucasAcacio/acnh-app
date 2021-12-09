import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import BugCard from './BugCard';

function BugPage() {
    var bugCards = [];
    const maxBugs = 80;
  
    for (let i = 1; i <= maxBugs; i++) {
        bugCards.push(
        <BugCard id={i}/>
      )
    }
  
    return (
      <View style={styles.fishContainer}>
        <ScrollView style={{width: "100%"}}>
            { bugCards }
            </ScrollView>
        </View>
    )
}

export default BugPage;

const styles = StyleSheet.create({
    fishContainer: {
        alignItems: 'center',
        backgroundColor: '#f8eebc'
    },
});