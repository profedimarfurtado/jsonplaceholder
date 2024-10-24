import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default function PostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Comments', {postId: item.id})}>
          <Icon name='comment' type='font-aewsome' color="#4267B2" />
          <Text style={styles.iconText}>Comentários</Text>
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