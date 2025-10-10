import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ReanimatedSwipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import { Checkbox, Icon, Text } from 'react-native-paper';
import useShoppingstore, { deleteInThePendingList, putInThePendingList, Task } from '../store/shopping';

type ItemProps={
    checked?: boolean,
    setChecked?:Function,
    item:Task,
    onSwipeRigth?:Function,
}
const Item=({checked,setChecked,onSwipeRigth, item}:ItemProps)=>{

    const swipeRef= useRef<SwipeableMethods|null>(null);
    const [checking, setChecking]= useState(false);
    const pendingForDelete = useShoppingstore((state:any)=>state.pendingForDelete)
    useEffect(()=>{
        //console.log("second niveau:",pending)
        if(checking){
            console.log("checking:",checking)
            putInThePendingList(item.id);
        }
        else{
            console.log("before delete:",pendingForDelete)
            deleteInThePendingList(item.id);
            console.log("checking:",checking);
        } 
        return ()=>{

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
                        setChecked && setChecked();
                        setChecking(!checking);
                    }}
                    />
                </View>
                <View style={styles.rightSide}>
                  {item.text && (
                     <Text
                    style={{fontWeight:"bold", fontSize:18}}
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