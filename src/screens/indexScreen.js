import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

//context
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  //grab in blog context data
  const blogValues = useContext(BlogContext);
  return (
    <View>
      <Text>This is the index screen</Text>
      <Button onPress={blogValues.addBlogPost} title='Add Post' />
      <FlatList
        data={blogValues.data}
        keyExtractor={blogValues => blogValues.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
