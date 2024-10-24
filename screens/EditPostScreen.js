import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function EditPostScreen({ route }) {
    const { postId } = route.params;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    // Carregar o post atual
    useEffect(() => {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                setTitle(response.data.title);
                setBody(response.data.body);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [postId]);

    // Função para atualizar o post
    const updatePost = () => {
        setLoading(true);
        axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            title: title,
            body: body
        })
            .then(response => {
                alert('Post atualizado com sucesso!');
                setLoading(false);
                navigation.navigate('Posts'); // Redirecionar de volta para a tela de Posts
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#4267B2" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Post</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)}
                placeholder="Título do Post"
            />
            <TextInput
                style={styles.input}
                value={body}
                onChangeText={text => setBody(text)}
                placeholder="Conteúdo do Post"
                multiline
            />
            <Button title="Atualizar Post" onPress={updatePost} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F0F2F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4267B2',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});