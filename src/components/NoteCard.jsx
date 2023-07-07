import { View, Text, StyleSheet } from 'react-native';

const NoteCard = ({ title, body }) => {
  return (<View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
    <View style={styles.line}></View>
    <Text>{body}</Text>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginVertical: 10,
    marginHorizontal:20,
    borderRadius: 5,
    paddingLeft: 7,
    paddingVertical: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    fontWeight:800,
    fontSize:21,
  },
  line:{
    marginVertical:5,
    height:2,
    width:'100%',
    backgroundColor:"red"
  }
})

export default NoteCard;