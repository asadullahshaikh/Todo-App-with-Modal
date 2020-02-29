import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Modal} from 'react-native';

const ItemInput = props => {
  const [item, setItem] = useState('');
  const itemInputHandler = text => {
    setItem(text);
  };
  const multi = () => {
    props.addItemHandler(item);
    setItem('');
  };
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add List Item"
          style={styles.input}
          onChangeText={itemInputHandler}
        />
        <View style={styles.btnView}>
          <View style={styles.btn}>
            <Button title="ADD" onPress={multi} />
          </View>
          <View style={styles.btn}>
            <Button title="CANCEL" color="red" onPress={props.cancelModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingLeft: 10,
  },
  btnView: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  btn: {
    width: '50%',
  },
});
export default ItemInput;
