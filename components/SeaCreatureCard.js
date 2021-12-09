import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';

function SeaCreatureCard( props ) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getSeaCreature = async () => {
        try {
            const response = await fetch('http://acnhapi.com/v1/sea/' + props.id);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getSeaCreature();
        return () => {
            setData({});
        }
    }, []);

    return (
        <View>
            {isLoading ? <ActivityIndicator/> : (
            <View style={styles.cardContainer}>
                <Image style={styles.cardImage} source={{uri:`${data.icon_uri}`}}/>
                <View style={styles.separator}/>
                <View style={{justifyContent:'center'}}>
                    <Text style={styles.header}>{data.name['name-USen']}</Text>
                    <Text style={styles.cardText}>Price: {data.price}</Text>
                    <Text style={styles.cardText}>Speed: {data.speed}</Text>
                </View>
                <View style={styles.separator}/>
                <View style={styles.cardInformationText}>
                    <Text style={styles.cardTextTitle}>Availability:</Text>
                    <Text style={styles.cardText2}>Months(N): {data.availability['month-northern']}</Text>
                    <Text style={styles.cardText2}>Months(S): {data.availability['month-southern']}</Text>
                    <Text style={styles.cardTimeText}>Time:{data.availability['time-array'].toString()}</Text>
                </View>
            </View>
         )}

        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width:  "95%",
        height: 170,
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 16,
        backgroundColor: "#FFF9E5", 
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5
    },
    cardTimeText: {
        maxWidth: 80,
        fontSize: 14,
        color:"#000",
    },
    cardImage: {
        width: 110,
        height: 120,
        borderRadius: 20,
        alignSelf: 'center',
        borderColor: '#e9e4d5',
        borderWidth: 5,
        backgroundColor: '#ede8d7'
    },
    cardInformationText: {
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    cardInformationAvailability: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    header: {
        maxWidth: 130,
        fontSize: 24,
        lineHeight:18.75,
        color: "#017C74",
        paddingTop: 20,
        fontWeight: "bold",
        textTransform: 'capitalize'
    },
    cardText: {
        fontSize: 16,
        color:"#000",
        fontWeight: "bold",
        maxWidth: 100
    },
    cardText2: {
        fontSize: 14,
        color:"#000",
    },
    cardTextTitle: {
        fontSize: 20,
        color:"#000",
        fontWeight: "bold"
    },
    separator:{
        width:1,
        height: "85%",
        backgroundColor: '#444444',
        alignSelf: 'center'
    },
});

export default SeaCreatureCard;