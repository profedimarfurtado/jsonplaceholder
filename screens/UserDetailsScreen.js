import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserDetailsScreen({ route }) {
  const { userId } = route.params; // Obtendo o userId a partir dos parâmetros de navegação
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fazendo a requisição para obter os detalhes do usuário com base no userId
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Carregando usuário...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nome: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Telefone: {user.phone}</Text>
      <Text>Website: {user.website}</Text>
      <Text>Empresa: {user.company.name}</Text>
      <Text>Endereço: {user.address.street}, {user.address.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});