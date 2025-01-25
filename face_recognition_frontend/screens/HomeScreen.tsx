import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) { 
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
        },
        buttonPrimary: {
            margin: 8,
            padding: 10,
            width: 250,
            height: 70,
            backgroundColor: '#5b6fdc',
            borderRadius: 45,
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        },
        buttonTextPrimary: {
            color: '#fff',
            fontSize: 20,
        },
        buttonSecondary: {
            margin: 8,
            padding: 10,
            width: 250,
            height: 70,
            backgroundColor: '#fff',
            borderRadius: 45,
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        },
        buttonTextSecondary: {
            color: '#5B6FDCFF',
            fontSize: 20,
        },
    });
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue X.</Text>
            <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => navigation.navigate('Reconnaissance faciale')}
            >
                <Text style={styles.buttonTextPrimary}>Déconnexion</Text>
            </TouchableOpacity>
            {/*<TouchableOpacity*/}
            {/*    style={styles.button}*/}
            {/*    onPress={() => navigation.navigate('LoginLBP')}*/}
            {/*>*/}
            {/*    <Text style={styles.buttonText}>Login LBP</Text>*/}
            {/*</TouchableOpacity>*/}
            {/*<TouchableOpacity*/}
            {/*    style={styles.buttonSecondary}*/}
            {/*    onPress={() => navigation.navigate('Inscription')}*/}
            {/*>*/}
            {/*    <Text style={styles.buttonTextSecondary}>Inscription</Text>*/}
            {/*</TouchableOpacity>*/}
        </View>
    );
}