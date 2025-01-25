import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Dimensions, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EndPoints } from '../constantes';
import {recognize} from "../useSendFile";

export default function ({ navigation }) {
    const [facing, setFacing] = useState<CameraType>('front');
    const [permission, requestPermission] = useCameraPermissions();
    const camera = useRef(null);
    const screenWidth = Dimensions.get('window').width;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        message: {
            textAlign: 'center',
            paddingBottom: 10,
        },
        cameraContainer: {

        },
        camera: {
            width: screenWidth,
            height: screenWidth,
        },
        buttonContainer: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'transparent',
            margin: 64,
        },
        button: {
            flex: 1,
            alignSelf: 'flex-end',
            alignItems: 'center',
            height: 64,
        },
        textContainer: {
            backgroundColor: '#5B6FDCFF',
            // padding: 8,
            width: 250,
            height: 50,
            borderRadius: 45,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
        },
    });

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Nous avons besoin des permissions pour accéder à la caméra.</Text>
                <Button onPress={requestPermission} title="Accorder les permissions" />
            </View>
        );
    }

    function handlePictureTaken() {
        camera.current?.takePictureAsync().then((photo) => {
            recognize(photo.uri);
            navigation.navigate('Home')
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                <CameraView ref={camera} style={styles.camera} facing={facing} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handlePictureTaken}>
                    <View style={styles.textContainer} >
                        <Text style={styles.text}>S'authentifier</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}