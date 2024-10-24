import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function PostCommentsScreen({ route }) {
    const { postId } = route.params; // Obtendo o ID do post a partir dos parâmetros de navegação
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Fazendo a requisição para obter os comentários daquele post específico
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(data => setComments(data));
    }, [postId]);

    return (
        <View style={styles.container}>
            <FlatList
                data={comments}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.comment}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text>{item.body}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    comment: {
        marginBottom: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});