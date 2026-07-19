

export default function CartBuyButton () {
    return (
    <div>
        <button 
            disabled={false}
            className="transition bg-lime-500 w-full rounded-xl py-3 mt-6 cursor-pointer text-white disabled:bg-slate-400 hover:bg-lime-600 active:bg-lime-700 active:scale-95 duration-200 ">
            Buy Now!
        </button>
    </div>
    )
}