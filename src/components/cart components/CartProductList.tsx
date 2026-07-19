import CartProduct from "./CartProduct";

export default function CartProductList () {
    return (
        <div className="flex flex-col gap-4">
            <CartProduct />
            <CartProduct />
            <CartProduct />
        </div>
    )
}