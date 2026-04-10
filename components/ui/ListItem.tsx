//import logo from '@/assets/images/logo.png';
import * as Crypto from 'expo-crypto';
import { useEffect, useState } from "react";
import { Keyboard, ScrollView, StyleSheet, View } from "react-native";
import { Button, Icon, IconButton, Text, TextInput } from "react-native-paper";
import useShoppingstore, { addTask, deleteATask, Task } from "../store/shopping";
import Item from "./Item";

const ListItem = () => {
    const tasks = useShoppingstore((state: any) => state.tasks);
    const deleteTasks = useShoppingstore((state: any) => state.deleteTasks);
    const pendingForDelete = useShoppingstore((state: any) => state.pendingForDelete);
    const [textTask, setTextTask] = useState("");
    const [focus, setFocus] = useState(false);
    const createNewTask = () => {
        if (textTask) {
            const task: Task = {
                text: textTask,
                createdAt: (new Date()).toISOString().split('T')[0],
                id: Crypto.randomUUID()
            };
            addTask(task);
            setTextTask("");
            //console.log("successful created!")
        }
    }
    const handleFocus = () => {
        console.debug("\u2714:::input focused===>");
        setFocus(true);
    }
    const handleBlur = () => {
        console.debug("\u2714:::input blurred===>");
        setFocus(false);
    }
    useEffect(() => {
        //console.log("tasks:", tasks);
        //console.log("pending tasks to delete:", pendingForDelete);
        const upKeyboardListener = Keyboard.addListener('keyboardDidShow', handleFocus);
        const downKeyboardListener = Keyboard.addListener('keyboardDidHide', handleBlur);
        return () => {
            upKeyboardListener.remove();
            downKeyboardListener.remove();
        };
    }, [tasks, deleteTasks, pendingForDelete])
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.bodyHeader}>
                    <Icon source={require('@/assets/images/logo.png')} size={150} />
                </View>
                <View style={styles.header}>
                    <IconButton icon={"cart"} iconColor="#0a7ea4" size={25}
                        onPress={() => {
                            alert('Here is your shopping list!')
                        }
                        }
                    />
                    <Text style={{
                        fontFamily: 'josefin-sans',
                        fontSize: 22,
                        lineHeight: 30,
                        color: "#0a7ea4"
                    }}>
                        My shopping list
                    </Text>
                </View>

                <View style={styles.content}>
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                        {tasks.length > 0 && (
                            tasks.map((item: Task, index: any) => (
                                <Item key={index} item={item}
                                    onDelete={() => deleteATask(item.id)}
                                    onSwipeRigth={() => {
                                        deleteATask(item.id)
                                    }}
                                />
                            ))
                        )}

                    </ScrollView>
                </View>
            </View>
            <View style={[styles.footer,
            focus && { marginBottom: 250, flex: 1 / 2, borderTopColor: "#0a7ea4", borderTopWidth: 2 }]} >

                <TextInput label={"Task"}
                    style={{
                        flexShrink: 1,
                        fontFamily: 'josefin-sans',
                        flex: 2,
                        height: 112,
                        borderColor: "transparent", borderWidth: 0,
                        backgroundColor: "#fff", marginBottom: 6
                    }}
                    placeholder="put a text for the task"
                    value={textTask}
                    onChangeText={(value) => setTextTask(value)}
                    underlineColor='transparent'

                />
                <Button icon="cart-plus" mode="contained"
                    onPress={() => createNewTask()}
                    style={{
                        flex: 1 / 2, height: "100%",
                        justifyContent: "center",
                        borderRadius: 0,
                        backgroundColor: "#0a7ea4",
                    }}>
                    Add Task
                </Button>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 3,
        backgroundColor: "#ccc",

    },
    footer: {
        flex: 1 / 3,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        flexShrink: 1,
        borderTopWidth: 0,
        borderTopColor: "#4d4b4bff",

    },
    bodyHeader: {
        flex: 1 / 2,
        justifyContent: "center",
        alignItems: "center",

    },
    content: {
        width: "90%",
        backgroundColor: "#fff",
        shadowColor: "gray",
        margin: "auto",
        marginTop: "0%",
        flex: 1,
        borderRadius: 5,
        marginBottom: 6
    },
    header: {
        flexDirection: "row",
        borderBottomWidth: 1,
        paddingBottom: 3,
        width: "90%",
        margin: "auto",
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "center",
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
    }
})
export default ListItem;