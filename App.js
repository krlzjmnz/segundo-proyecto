import React from 'react'
import {FlatList, StyleSheet, Text} from 'react-native'

const items =[
    {id:'0', text:'primer elemento'},
    {id:'1', text:'segundo elemento'},
    {id:'2', text:'tercer elemento'},
    {id:'3', text:'cuarto elemento'},
    {id:'4', text:'quinto elemento'},
]

export default function App() {
    return (
        <FlatList
            style={styles.container}
            data={items}
            renderItem={({item})=><Text style={styles.row}>{item.text}</Text>}
            keyExtractor={(item)=> item.id}
        />
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    row:{
        padding: 15,
        marginBottom:5,
        backgroundColor: 'skyblue',
    },
})