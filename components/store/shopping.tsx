import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export type Task={
    id:string,
    text:string,
    createdAt:string
}
const useShoppingstore=create(devtools(persist((set,get)=>({
    tasks:[] as Array<Task>,
    deleteTasks:[] as Array<Task>,
    pendingForDelete:[] as Array<string>
}),{name:"shopping-storage", storage:createJSONStorage(()=>AsyncStorage)})));

export const deleteATask=(id:string)=>{
    const state:any= useShoppingstore.getState();
    const {tasks, deleteTasks}= state;
    tasks.map((item:Task)=>{
        if(item.id===id) deleteTasks.push(item);
        else return item;
    });
    const newTasks= tasks.filter((item:Task)=>item.id!==id);
    //console.log("item supprimer:",deleteTasks);
    //console.log("tasks:",newTasks);
    useShoppingstore.setState((state:any)=>({
        ...state,
        tasks:[...newTasks],
        deleteTasks:[...deleteTasks]
    }));
}
export const addTask=(task:Task)=>{
    const state:any= useShoppingstore.getState();
    const tasks= state.tasks;
    if(!tasks.includes((item:Task)=>item.id===task.id || item.text===task.text))
        tasks.push(task);
     useShoppingstore.setState((state:any)=>({
        ...state,
        tasks:[...tasks],
    }));
    //console.log("tassssks:",tasks);
}
export const putInThePendingList=(id:string)=>{
    const state:any= useShoppingstore.getState();
    const pending = state.pendingForDelete;
    if(!pending.includes(id))pending.push(id);
    useShoppingstore.setState((state:any)=>({
        ...state,
        pendngForDelete:[...pending]
    }))
}
export const deleteInThePendingList=(id:string)=>{
    const state:any= useShoppingstore.getState();
    const pendingForDelete = state.pendingForDelete;
    const newPending = pendingForDelete.filter((itemId:string)=>itemId!==id)
    useShoppingstore.setState((state:any)=>({
        ...state,
        pendingForDelete:[...newPending]
    }))
}
export default useShoppingstore;