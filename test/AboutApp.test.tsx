import { render, screen } from "@testing-library/react-native";
//import {describe,test} from "@jest"
import AboutApp from "@/components/ui/AboutApp";
import { describe, expect, test } from '@jest/globals';
describe('test for general component: AboutApp',()=>{
    test("should not be null",()=>{
        const result = render(<AboutApp/>);
        expect(result).not.toBeNull();
    })
    test("should not throw an exception",()=>{
         const result = render(<AboutApp/>);
        expect(screen.toJSON()).toMatchSnapshot();
    })
   
    
})