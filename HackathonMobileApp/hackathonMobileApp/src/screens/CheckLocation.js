import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import BackButton from '../components/BackButton'

export default function CheckLocation({ navigation }) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== 'granted') {
    //             setErrorMsg('Permission to access location was denied');
    //             return;
    //         }

    //         let location = await Location.getCurrentPositionAsync({});
    //         setLocation(location);
    //     })();
    // }, []);

    // let text = 'Waiting..';
    // if (errorMsg) {
    //     text = errorMsg;
    //     console.log(text)
    // } else if (location) {
    //     text = JSON.stringify(location);
    //     console.log(text)
    // }


    return (
       
        <View style={styles.container}>
            <BackButton goBack={navigation.goBack} />
            {location ?
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    minZoomLevel={10}
                    maxZoomLevel={15}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title={"Saylani Gulshan Campus"}
                    />
                </MapView>
                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#1877f2',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    textOutout: {
        fontSize: 24,
        margin: 20
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})