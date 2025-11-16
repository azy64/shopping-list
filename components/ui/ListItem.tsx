//import logo from '@/assets/images/logo.png';
import * as Crypto from 'expo-crypto';
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Icon, IconButton, Text, TextInput } from "react-native-paper";
import useShoppingstore, { addTask, deleteATask, Task } from "../store/shopping";
import Item from "./Item";

const ListItem=()=>{
    const tasks = useShoppingstore((state:any)=>state.tasks);
    const deleteTasks = useShoppingstore((state:any)=>state.deleteTasks);
    const pendingForDelete= useShoppingstore((state:any)=>state.pendingForDelete);
    const [textTask, setTextTask]= useState("");
    const createNewTask=()=>{
        if(textTask){
            const task:Task ={text:textTask, 
                createdAt:(new Date()).toISOString().split('T')[0], 
                id:Crypto.randomUUID()};
            addTask(task);
            setTextTask("");
            //console.log("successful created!")
        }
    }
    useEffect(()=>{
        //console.log("tasks:", tasks);
        //console.log("pending tasks to delete:", pendingForDelete);
    },[tasks,deleteTasks,pendingForDelete])
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.bodyHeader}>
                    <Icon source={require('@/assets/images/logo.png')} size={150}/>
                </View>
                
                <ScrollView style={{flex:1}}>
                    <View style={styles.content}>
                        <View style={{flex:1,flexDirection:"row",borderBottomWidth:1,
                        paddingBottom:3,
                            justifyContent:"flex-start",alignItems:"center"}}>
                            <IconButton icon={"cart"} iconColor="#0a7ea4" size={25}
                            onPress={()=>{
                                alert('Here is your shopping list!')
                            }
                            }
                        />
                        <Text style={{
                        fontFamily:'josefin-sans',
                            fontSize:22,color:"#0a7ea4"}}>
                                My shopping list
                        </Text>
                        </View>
                        
                        {tasks.length>0 && (
                            tasks.map((item:Task,index:any)=>(
                                <Item key={index} item={item}
                                onDelete={()=>deleteATask(item.id)}
                                onSwipeRigth={()=>{
                                    deleteATask(item.id)
                                }}
                                />
                            ))
                        )}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <TextInput label={"Task"}
                style={{flex:2,flexShrink:1,fontFamily:'josefin-sans'}}
                placeholder="put a text for the task"
                value={textTask}
                onChangeText={(value)=>setTextTask(value)}
                />
                <Button icon="cart-plus" mode="contained"
                onPress={()=>createNewTask()}
                style={{flex:1/2,height:"100%", 
                justifyContent:"center",
                 borderRadius:0,
                 backgroundColor:"#0a7ea4",
                 }}>
                    Add Task
                </Button>
                
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    body:{
        flex:3,
        backgroundColor:"#ccc",
        
    },
    footer:{
        flex:1/3,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        flexShrink:1,
        borderTopWidth:0,
        borderTopColor:"#4d4b4bff",
        
    },
    bodyHeader:{
        flex:1/2,
        justifyContent:"center",
        alignItems:"center",

    },
    content:{
        width:"90%",
        backgroundColor:"#fff",
        shadowColor:"gray",
        margin:"auto",
        marginTop:"0%",
        flex:1,
        borderRadius:5,
        marginBottom:6
    }
})
export default ListItem;