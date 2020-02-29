import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ItemList = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text style={styles.text}>{props.Item}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    marginVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
export default ItemList;
