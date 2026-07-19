

export default function DrawerHead(setDrawerIsOpen: {setDrawerIsOpen: (isOpen: boolean) => void}) {



    return (
       
            <div className="flex items-center gap-4 mb-5">
                <div onClick={setDrawerIsOpen ? () => setDrawerIsOpen.setDrawerIsOpen(false) : undefined}>
                    <svg
                        className="cursor-pointer opacity-30 rotate-180  duration-300 hover:opacity-100 transition" 
                        width="16" 
                        height="14" 
                        viewBox="0 0 16 14" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M1 7H14.7143" 
                        stroke="black" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                    <path 
                        d="M8.71436 1L14.7144 7L8.71436 13" 
                        stroke="black" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                    </svg>
                </div>
               <p className="text-2xl font-bold">Cart</p>
            </div>
    )
}