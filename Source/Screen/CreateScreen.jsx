import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { add } from 'react-native/types_generated/Libraries/Animated/AnimatedExports'

const CreateScreen = ({data,setdata}) => {

    const [itemName,setItemName] = useState("")
    const[stock,setStock] = useState("")

    const [isEdit,setIsEdit] = useState(false)

    const [editItemId,setEditItemId] = useState(null)



   const addItemhandler = ()=>{
       
       
         const newItem = {
             id:Date.now(),
              name:itemName,
              stock:stock
         }
         setdata([...data,newItem])
         setItemName("")
          setStock("")
          setIsEdit(false)

   }

   const deleteHandler = (id)=>{
      setdata(data.filter((item)=> item.id !== id))
   }

   const edithandler = (item)=>{
      setIsEdit(true)
       setItemName(item.name)
       setEditItemId(item.id)
      
   }
     

   const updateItemhandler = ()=>{
      
    setdata(data.map((item)=>(
      item.id === editItemId ? {...item,name:itemName,stock:stock} : item
    )))
   }
  return (
    <View style={styles.container}>
      <TextInput
         placeholder='Enter an Iterm Name'
       style={styles.input}
       value={itemName}
       onChangeText={(item)=> setItemName(item)}
       placeholderTextColor={"grey"}
      />

      <TextInput
         placeholder='Enter an Stock Name'
       style={styles.input}
       value={stock}
       onChangeText={(item)=> setStock(item)}
       placeholderTextColor={"grey"}
      />
       
       <Pressable style={
         styles.addButton
       } onPress={()=> isEdit ? updateItemhandler(): addItemhandler()} >
        <Text style={styles.btnText}> { isEdit ? 'Edit Item': 'Add Item in Stock' }</Text>
       </Pressable>



      <View style={{marginTop:30}}>
      
         
          <View style={styles.headingContainer}>
              <Text style={styles.headingText} >All Items in stock</Text>
           
          </View>
      
          <FlatList
           
           data={data}
              keyExtractor={(item)=>item.id}
              renderItem ={({item})=>(
                  <View style={[styles.itemContainer ,{backgroundColor: item.stock<20  ? "#FFCCCC":"#D7F6BF"   }]}>
                      <Text style={styles.itemText}>{item.name}</Text> 
                      <Text style={styles.itemText}>{item.stock}</Text>


                    <View style={{flexDirection:"row", gap:10}}>

                    <Pressable onPress={()=>edithandler(item)}>
                      <Text style={styles.itemText}>
                        Edit
                       </Text>

                    </Pressable>
                       
                       <Pressable onPress={()=> deleteHandler(item.id)}>
                         <Text style={styles.itemText}>  Delete</Text>
                       </Pressable>


                      </View>
                        


                  </View>
              )}
      
              contentContainerStyle={{gap:10}}
      
          
          />
      
           </View>


    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({

    container:{
         padding:"4%",
    }
,
   input:{
    borderWidth:1,
    borderColor:"grey",
   
        marginTop:20,
        height:50,
        paddingHorizontal:10,
   }
   ,

   addButton:{
    backgroundColor:"#CABFEEFF",
    paddingVertical:10,
    padddingHorizontal:10,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center", 
    marginTop:20 
   },

   btnText:{
    color:"white",
    fontWeight:"500",
    fontSize:16
   },

    headingContainer:{
       flexDirection:"row",
         justifyContent:"space-between",
         marginTop:20,
         paddingHorizontal:10,
         marginBottom:10,
    }
    ,
    headingText:{
        fontSize:14,
        fontWeight:"500",
        marginVertical:10
        
    },
    itemContainer:{
        flexDirection:"row",
         justifyContent:"space-between",
       

    },
    itemText:{
        fontSize:16,
        fontWeight:"400",
        padding:10,
        

    }

   
})