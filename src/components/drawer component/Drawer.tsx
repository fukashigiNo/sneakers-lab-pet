import DrawerHead from "./DrawerHead"
import CartProductList from "../cart components/CartProductList"
import CartBuyInfo from "../cart components/CartBuyInfo"
import { useState } from "react";



export default function Drawer() {
    const [drawerIsOpen, setDrawerIsOpen] =  useState<boolean>(true);

    if (drawerIsOpen) {
        return (
        <div>
            <div className="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
            <div className="bg-white w-96 h-screen fixed right-0 top-0 z-20 p-8">
                <DrawerHead setDrawerIsOpen={setDrawerIsOpen} /> 
                <CartProductList />
                <div>
                    <CartBuyInfo />
                </div>
            </div>
        </div>
        )
    } else { null }
  
}   