import { useState } from "react";

import Drawer from "../drawer component/Drawer";



export default function Header() {
    const [showDrawer, setShowDrawer] = useState<boolean>(false);

    return (
        <header className="flex justify-between border-b border-slate-300 px-8 py-8">
            <div className="flex items-center gap-4">
                <img src="/logo.png" alt="Logo" className="w-10"/> 
                <div>
                    <h2 className="text-xl font-bold uppercase">Sneakers Store</h2>
                    <p className="text-slate-400">Your one-stop shop for the latest sneakers</p>
                </div>
            </div>

            <ul className="flex items-center gap-10">
                <li className="flex items-center gap-3 cursor-pointer text-gray-400 hover:text-black" onClick={() => setShowDrawer(!showDrawer)}>
                    <img src="/cart.svg" alt="cart" />
                    <b>1205 </b>
                </li> {showDrawer && 
                    <Drawer />
                }

                <li className="flex items-center gap-3 cursor-pointer text-gray-400 hover:text-black">
                    <img src="/heart.svg" alt="liked" />
                    <span>Liked</span >
                </li>

                <li className="flex items-center gap-3 cursor-pointer text-gray-400 hover:text-black">
                    <img src="/user.svg" alt="profile" />
                    <span>Profile</span>
                </li>
            </ul>
        </header>
    )
}