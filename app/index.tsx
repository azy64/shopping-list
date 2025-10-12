import logo from '@/assets/images/logo.png';
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { Button, Icon } from "react-native-paper";

const Index=()=> {
    const nav = useRouter();
useEffect(()=>{
    
})
     return (
        <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
            <View style={{margin:"auto", flex:1/2, width:"80%",
                 justifyContent:"center", alignItems:"center",
                  alignContent:"center", paddingTop:"10%"}}>
             <View style={{flex:1}}>
                    <Icon source={logo} size={150} color="#0a7ea4"/>
                </View>
            <View style={{flex:1}}>
            <Button style={{backgroundColor:"#0a7ea4"}} icon={"home"} mode="contained" onPress={()=>{
               nav.navigate("/(tabs)/homeTask")
            }}>
                Start
            </Button>
            </View>
            </View>
        </View>
     
    );
     }
export default Index;