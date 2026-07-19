

export default function CartProduct() {
    return (
        <div className='flex items-center border border-slate-300 p-4 rounded-xl gap-4'>
            <img src="/sneakers/1.jpg" alt="sneakers" className='w-16 h-16'/>
            
            <div className='flex flex-col ml-4'>
                <p>Mens Sneakers Nike</p>

                <div className='flex justify-between mt-2'>
                    <b>100$</b>
                    <img className='opacity-30 hover:opacity-100 transition ' src="/btn-remove.svg" alt="removebtn" />
                </div>
            </div>


        </div>
    )
}