import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView
} from 'react-native';

//context
import BlogContext from '../context/BlogContext';

const IndexScreen = props => {
  //grab in blog context data
  const context = useContext(BlogContext);
  return (
    <View>
      <Text>This is the index screen</Text>
      <Button onPress={context.addBlogPost} title='Add Post' />
      <FlatList
        data={context.data}
        keyExtractor={context => context.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default IndexScreen;
