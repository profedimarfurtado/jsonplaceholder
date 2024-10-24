import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CommentsScreen() {

  return (
    <View style={styles.container}>
        <View style={styles.comment}>
            <Text style={styles.name}>Nome do comentarista:</Text>
            <Text>Corpo do Comentário</Text>
        </View>
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