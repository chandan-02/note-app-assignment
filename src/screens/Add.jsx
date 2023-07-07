import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { getDatabase, push, ref, } from "firebase/database";

const Add = ({navigation}) => {

  const [noteData, setNoteData] = useState({ title: '', body: '' })
  const [loading, setLoading] = useState(false);

  const onSave = async () => {
    setLoading(true)
    const db = getDatabase();
    push(ref(db, 'notes/'), noteData).then(res => {
      setNoteData({title:'',body:''})
      setLoading(false);
      navigation.navigate('home')
    }).catch(err => setLoading(false));
  }

  return <SafeAreaView>
    <TextInput
      style={styles.input}
      placeholder="Note title"
      onChangeText={(text) => setNoteData({ ...noteData, title: text })}
      value={noteData.title}
    />
    <TextInput
      style={styles.input}
      placeholder="Note Body"
      onChangeText={(text) => setNoteData({ ...noteData, body: text })}
      value={noteData.body}
    />
    <TouchableOpacity
      style={{ ...styles.btn, }}
      onPress={() => { onSave() }}
    >
      {!loading ? <Text style={{ color: "white" }}>Save Note</Text> : <ActivityIndicator size={21} color={"white"} />}
    </TouchableOpacity>
  </SafeAreaView>
}

export default Add;

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FF6666',
    fontSize: 21,
    padding: 10,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  }
});