
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ReanimatedSwipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import { Checkbox, Icon, Text } from 'react-native-paper';
import useShoppingstore, { deleteInThePendingList, putInThePendingList, Task } from '../store/shopping';

type ItemProps={
    item:Task,
    onSwipeRigth?:Function,
    onDelete: Function,
}
const Item=({onDelete,onSwipeRigth, item}:ItemProps)=>{

    const swipeRef= useRef<SwipeableMethods|null>(null);
    const [checking, setChecking]= useState(false);
    const pendingForDelete = useShoppingstore((state:any)=>state.pendingForDelete)
    useEffect(()=>{
        let time= null;
        if(checking){
            putInThePendingList(item.id);
           time= setTimeout(()=>{
                onDelete()
            setChecking(!checking);
            },500)
            
        }
        else{
            deleteInThePendingList(item.id);
        } 
        return ()=>{
            time && clearTimeout(time)
        }
    },[checking])
    return(
        <ReanimatedSwipeable
        onSwipeableOpen={()=>{
            onSwipeRigth && onSwipeRigth();
            swipeRef.current?.close();
        }}
        ref={swipeRef}
        onEnded={()=>{swipeRef && swipeRef.current?.close()}}
        rightThreshold={20}
        renderLeftActions={()=>(
        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
            <Icon source={"delete"} size={16} color='red'/>
        </View>)}
        >
            <View style={styles.container}>
                <View style={styles.leftSide}>
                    <Checkbox
                        status={checking ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecking(!checking);
                    }}
                    />
                    {/*<IconButton icon={"delete"} size={19} iconColor='red'
                    onPress={()=>onDelete()}/>*/}
                </View>
                <View style={styles.rightSide}>
                  {item.text && (
                     <Text
                    style={{
                        fontSize:33,
                        color:"#0a7ea4",
                        fontFamily:'dancing-bold',
                        
                    }}
                    >
                        {item.text}
                    </Text>
                  )} 
                </View>
            </View>
        </ReanimatedSwipeable>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        borderBottomWidth:1,
        borderStyle:"dotted",
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        backgroundColor:"#fff"
    },
    leftSide:{
        flex:1/2,
        borderRightWidth:1,
        borderStyle:"solid",
        borderRightColor:"#575555ff",
        justifyContent:"center",
        alignItems:"center"
    },
    rightSide:{
        flex:3,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Item;