import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native-paper";

const Index=()=> {
    const nav = useRouter();
useEffect(()=>{
    nav.navigate("/(tabs)/homeTask")
})
     return <Text>Home</Text>;
     }
export default Index;