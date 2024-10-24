import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'; // Biblioteca para ícones
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Escolha uma página para navegar:</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Posts')}
      >
        <Icon name="list-alt" type="font-awesome" color="#4267B2" />
        <Text style={styles.buttonText}>Posts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Comments')}
      >
        <Icon name="comments" type="font-awesome" color="#4267B2" />
        <Text style={styles.buttonText}>Comentários</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Users')}
      >
        <Icon name="user" type="font-awesome" color="#4267B2" />
        <Text style={styles.buttonText}>Usuários</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5', // Fundo semelhante ao Facebook
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4267B2', // Cor azul do Facebook
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 10,
    width: '80%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4267B2',
    marginLeft: 10, // Espaço entre o ícone e o texto
  },
});