import {EndPoints} from "./constantes";

const uriToFile = async (uri) => {
    try {
        const response = await fetch(uri);
        const blob = await response.blob();
        return {
            uri: uri,
            type: blob['_data']['type'],
            name: blob['_data']['name']
        };
    } catch (error) {
        console.error('Erreur de conversion en Blob:', error);
        throw error;
    }
};

export const recognize = async (photoUri) => {
    try {
        const file = await uriToFile(photoUri);
        const formData = new FormData();
        formData.append('image', file);
        const response = await fetch(EndPoints.RECOGNIZE, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        });
        const result = await response.json();
        if (response.ok) {
            alert('Image envoyée avec succès!');
        } else {
            alert(`Erreur: ${result.error}`);
        }
    } catch (error) {
        alert('Erreur de connexion au serveur.');
    }
};

export const learning = async (name, photoUri) => {
    try {
        const file = await uriToFile(photoUri);
        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', name);
        const response = await fetch(EndPoints.RECOGNIZE, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        });
        const result = await response.json();
        if (response.ok) {
            alert('Image envoyée avec succès!');
        } else {
            alert(`Erreur: ${result.error}`);
        }
    } catch (error) {
        alert('Erreur de connexion au serveur.');
    }
};