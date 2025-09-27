import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import React, { use } from 'react'
import AllItem from './AllItem'
import CreateScreen from './CreateScreen'

const data =[

    { id:1,name:"Wheat",stock:5,unit:"kg"},
    { id:2,name:"Rice",stock:15,unit:"kg"},
    { id:3,name:"Whaet",stock:25,unit:"kg"},
    { id:4,name:"Pulse",stock:50,unit :"kg" },
    { id:5,name:"Corn",stock:19,unit:"kg"},      
]

const HomeScreen = () => {
    const [view,setView] = useState(1)
    
    const [data,setdata] = useState(
      [
        

    { id:1,name:"Wheat",stock:5,unit:"kg"},
    { id:2,name:"Rice",stock:15,unit:"kg"},
    { id:3,name:"Whaet",stock:25,unit:"kg"},
    { id:4,name:"Pulse",stock:50,unit :"kg" },
    { id:5,name:"Corn",stock:19,unit:"kg"},      
]
      
    )

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}> Dashboard</Text>

      <View style={styles.buttonContainer}>
      <Pressable style={[styles.btn,view=== 0 ? {backgroundColor:"green"}:null]} onPress={()=>setView(0)}>
        <Text style={[styles.btnText,view===0 ? {color:"white"}:null] }>All Items</Text>

      </Pressable>
      <Pressable style={[styles.btn,view=== 1 ? {backgroundColor:"green"}:null]} onPress={()=>setView(1)}>
        <Text style={[styles.btnText,view===1 ? {color:"white"}:null]}>Low Stocks</Text>
      </Pressable>

      <Pressable style={[styles.btn,view=== 2 ? {backgroundColor:"green"}:null]} onPress={()=>setView(2)}>
        <Text   style={[styles.btnText,view===2 ? {color:"white"}:null]}>Create</Text>
      </Pressable>
      </View>

      {view==0 &&  <AllItem data={data}/>}
       {view==1 &&  <AllItem  data={data.filter((ram)=> ram.stock<20)}/>}
        {view==2 &&  <CreateScreen data={data} setdata={setdata}/>}

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({


    container:{
         width:"100%",
         height:"100%",
         backgroundColor:"#ffffff",
         padding:"4%"
    }
    ,
    title:{
        fontSize:24,
        fontWeight:"bold",
        

    }
    ,
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20
    },
    btn:{
          borderRadius:50,
          borderWidth:.8,
          paddingVertical:8,
          paddingHorizontal:16,
          borderColor:"green",
    }
    ,btnText:{
        color:"green",
        fontWeight:"bold",
        fontSize:14
    }

})