import CartBuyButton from "./CartBuyButton"

export default function CartBuyInfo () {
    return (
        <div>
            <div className="flex gap-5 ">
                <span>All sum:</span>
                <div className="flex-1 border-b border-dashed"></div>
                <b>1 498 USD</b>
            </div>
             <div className="flex gap-2">
                <span>Tax 10%:</span>
                <div className="flex-1 border-b border-dashed"></div>
                <b> 148 USD</b>
            </div>
            <CartBuyButton />
        </div>
    )
}