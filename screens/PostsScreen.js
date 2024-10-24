import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default function PostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const deletePost = (postId) => {
    console.log("Clicou");
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja deletar este post?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Deletar",
          onPress: () => {
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
              .then(response => {
                setPosts(posts.filter(post => post.id !== postId));
                alert('Post deletado com sucesso!');
              })
              .catch(error => {
                console.error(error);
              });
          }
        }
      ]
    );
  };

  const patchPost = (postId) => {
    axios.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      title: "Título Atualizado Parcialmente"
    })
    .then(response => {
      setPosts(posts.map(post => post.id === postId ? response.data : post));
      alert('Post atualizado parcialmente!');
    })
    .catch(error => {
      console.error(error);
    });
  };

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('PostComments', {postId: item.id})}>
          <Icon name='comment' type='font-aewsome' color="#4267B2" />
          <Text style={styles.iconText}>Comentários</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('EditPost', { postId: item.id })}>
          <Icon name="edit" type="font-awesome" color="#4267B2" />
          <Text style={styles.iconText}>Editar Post</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => patchPost(item.id)}>
          <Icon name="edit" type="font-awesome" color="#4267B2" />
          <Text style={styles.iconText}>Atualizar Parcialmente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => deletePost(item.id)}>
          <Icon name="trash" type="font-awesome" color="#4267B2" />
          <Text style={styles.iconText}>Delete Post</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('UserDetails', {userId: item.userId})}>
          <Icon name="user" type="font-awesome" color="#4267B2" />
          <Text style={styles.iconText}>Ver usuário</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={ renderPost }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5', // Fundo parecido com o do Facebook
    padding: 10,
  },
  postContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  postBody: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 5,
    color: '#4267B2', // Cor azul do Facebook
    fontWeight: 'bold',
  },
});