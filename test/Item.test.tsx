import { fireEvent, render, screen } from "@testing-library/react-native";
//import {describe,test} from "@jest"
import Item from "@/components/ui/Item";
import { describe, expect, test } from '@jest/globals';
describe('test for general component: Item',()=>{
    const item= {
    id: "AZ789",
    text: "Buy books",
    createdAt: "19/02/2025",
    }
     const removeItem=()=> 1
    test("should not be null",()=>{
       
        
        const result = render(<Item onDelete={()=>removeItem()} item={item} onSwipeRigth={()=>removeItem()} />);
        expect(result).not.toBeNull();
    })
    test("should match an exception",()=>{
        render(<Item onDelete={()=>removeItem()} item={item} onSwipeRigth={()=>removeItem()} />);
        expect(screen.toJSON()).toMatchSnapshot();
    })
    test("should have CheckBox element",()=>{
         render(<Item onDelete={()=>removeItem()} item={item} onSwipeRigth={()=>removeItem()} />);
        expect(screen.getByTestId("Item")).toContainElement(screen.getByTestId("CheckBox"));
    })
    
})