import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import NoteCard from '../components/NoteCard';

import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from 'react';
import { useIsFocused } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const isFocused = useIsFocused();

  useEffect(() => {
    const dbRef = ref(getDatabase());
    if (isFocused) {
      get(child(dbRef, `notes`)).then((snapshot) => {
        if (snapshot.exists()) {
          let notes = snapshot.val()
          // console.log(notes)
          setData(notes);
          setLoading(false)
        } else {
          console.log("No data available");
          setLoading(false)
        }
      }).catch((error) => {
        console.error(error);
      });
    }

  }, [isFocused]);

  const windowHeight = Dimensions.get('window').height;
  return <View>
    <FlatList
      data={Object.keys(data)}
      renderItem={({ item }) => <NoteCard title={data[item].title} body={data[item].body} />}
      keyExtractor={item => item.title}
    />
    <TouchableOpacity
      style={{ ...styles.floatingbtn, top: windowHeight - 200 }}
      onPress={() => { navigation.navigate("add") }}
    >
      <Text style={{ color: "white" }}>Add</Text>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  floatingbtn: {
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    right: 20,
    height: 70,
    backgroundColor: 'red',
    borderRadius: 100,
    bottom: 0,
  }
})

export default Home;