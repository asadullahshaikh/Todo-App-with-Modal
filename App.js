import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  TextInput,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import ItemList from './components/ItemList';
import ItemInput from './components/ItemInput';

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const [modal, setModal] = useState(false);

  const onDelete = id => {
    const newItems = addItem.filter(items => {
      return items.id !== id;
    });
    setAddItem(newItems);
  };

  const addItemHandler = item => {
    if (!item) {
      return false;
    }
    setAddItem(currentItemsList => [
      ...currentItemsList,
      {id: Math.random().toString(), value: item},
    ]);
    setModal(false);
  };
  const cancelModal = () => {
    setModal(false);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Button title="Add Item " onPress={() => setModal(true)} />
        <ImageBackground
          style={styles.img}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjb_F3qivFZcIPZz4MZGnxXqJfvkGTfBikmBoxzj7XWKEQb9Zn',
          }}>
          <View style={styles.inner}>
            <ItemInput
              addItemHandler={addItemHandler}
              visible={modal}
              cancelModal={cancelModal}
            />
            <FlatList
              keyExtractor={(item, index) => item.id}
              data={addItem}
              renderItem={items => (
                <ItemList
                  Item={items.item.value}
                  id={items.item.id}
                  onDelete={onDelete}
                />
              )}
            />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 1,
    backgroundColor: 'black',
  },
  img: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: '80%',
    height: '95%',
    backgroundColor: 'rgba(255,255,255,.3)',
  },
});

export default App;
