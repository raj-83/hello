import { StyleSheet,FlatList, Text, View } from 'react-native'
import React from 'react'


const AllItem = ({data}) => {
  return (
    <View>

   
    <View style={styles.headingContainer}>
        <Text style={styles.headingText} >Items</Text>
        <Text style={styles.headingText}> Quantity</Text>
    </View>

    <FlatList
     
     data={data}
        keyExtractor={(item)=>item.id}
        renderItem ={({item})=>(
            <View style={[styles.itemContainer ,{backgroundColor: item.stock<20  ? "#FFCCCC":"#D7F6BF"   }]}>
                <Text style={styles.itemText}>{item.name}</Text> 
                <Text style={styles.itemText}>{item.stock}</Text>
            </View>
        )}

        contentContainerStyle={{gap:10}}

    
    />

     </View>
  )
}

export default AllItem

const styles = StyleSheet.create({


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