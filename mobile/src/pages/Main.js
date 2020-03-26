import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout} from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {

    const [ currentRegion, setCurrentRegion ] = useState(null);

    useEffect(() => {
        async function loadInicialPosition() {
            const { granted } = await requestPermissionsAsync();

            if(granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;


                setCurrentRegion({
                    latitude, 
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })

            }
        }
        loadInicialPosition();
    }, []);

    if(!currentRegion) {
        return null;
    }

    return(

    < MapView  initialRegion={currentRegion} style={ styles.map }>
        <Marker coordinate={{ latitude: 37.3874809, longitude: -122.0895084}} >
            <Image style={styles.avatar} source={ { uri: 'https://avatars1.githubusercontent.com/u/2254731?s=460&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4'}}></Image>
            <Callout>
                <View style={styles.callout}>
                    <Text style={styles.devName}>Diego Fernandes</Text>
                    <Text style={styles.devBio}>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</Text>
                    <Text style={styles.devTechs }>ReactJS, React Native, Node.js</Text>
                </View>
            </Callout>
        </Marker>
    </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff'
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    devBio: {
        color: '#666',
        marginTop: 5,
        textAlign: 'center',
    },
    devTechs: {
        marginTop: 5,
        textAlign: 'center',
    }
});

export default Main;