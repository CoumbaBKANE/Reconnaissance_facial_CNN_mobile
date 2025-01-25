import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {EndPoints} from '../constantes';

import {View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {learning} from "../useSendFile";
export default function SignUpScreen({ navigation }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const onSignUp = async () => {
        if (!name || !image) {
            setError("Tous les champs sont requis !");
            return;
        }
        learning(name, image);
        //
        // const formData = new FormData();
        // formData.append('name', name);
        //
        // try {
        //     const response = await fetch(image);
        //     const blob = await response.blob();
        //     const file = new File([blob], 'profile_picture.jpg', { type: blob.type || 'image/jpeg' });
        //     formData.append('image', file);
        //
        //     const res = await fetch(EndPoints.LEARNING, {
        //         method: 'POST',
        //         body: formData,  // Ne pas utiliser JSON.stringify ici
        //     });
        //
        //     const data = await res.json();
        //     if (res.status === 200) {
        //         alert('Inscription réussie');
        //         navigation.navigate('Welcome');
        //     } else {
        //         setError(data.error || "Une erreur s'est produite");
        //     }
        // } catch (error) {
        //     setError("Erreur lors de l'inscription");
        // }
    };

    const uploadImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert("Veuillez autoriser l'accès à la bibliothèque de médias");
            return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Veuillez renseigner vos informations personnelles</Text>

            {error ? <Text style={styles.error}>{error}</Text> : null}


            <TextInput
                style={styles.input}
                placeholder='Identifiant'
                value={name}
                onChangeText={setName}
            />
            {/*<View style={styles.buttonContainer}>*/}
            {/*    <Button title="Choisir une photo" onPress={uploadImage} />*/}
            {/*</View>*/}

            {
                !image && <TouchableOpacity
                    style={styles.button}
                    onPress={uploadImage}
                >
                    <Text style={styles.buttonText}>Choisir une photo</Text>
                </TouchableOpacity>
            }

            {image && <Image source={{ uri: image }} style={styles.image} />}

            {
                image && <TouchableOpacity
                    style={styles.button}
                    onPress={onSignUp}
                >
                    <Text style={styles.buttonText}>S'inscrire</Text>
                </TouchableOpacity>

            }


        </View>

    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        marginVertical: 8,
        width: '80%',
        padding: 25,
        fontSize: 20,
        borderWidth: 0,
        borderColor: '#ccc',
        borderRadius: 45,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    button: {
        padding: 10,
        width: 250,
        height: 70,
        backgroundColor: '#5b6fdc',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 20,
        marginBottom: 20,

    },
    error: {
        color: 'red',
        fontSize: 16,
        marginTop: 10,
    },
});
