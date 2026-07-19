type Props = {
    imageUrl: string;
    title: string;
    price: number;
    isAdded?: boolean;
    isFavorited?: boolean;
    onFavorite?: () => void;
}

export default function Products({ imageUrl, title, price, isAdded = false, isFavorited = false, onFavorite }: Props) {
    return (
        <div>
            <div className="relative  border border-slate-200 rounded-lg p-5 w-60 transition hover:shadow-lg cursor-pointer duration-200 hover:-translate-y-1">
                <img 
                   src={isFavorited ? "/liked.svg" : "/unliked.svg"} 
                   alt="unliked" 
                   className="absolute top-2 left-2 cursor-pointer" 
                   onClick={onFavorite}
                />
                <img src={imageUrl} alt="nike" />
                <p className="mt-3">{title}</p>
 
                <div className="flex justify-between mt-5">
                    <div className="flex flex-col">
                        <span className="text-slate-400">Price:</span>
                        <b>{price} ₸</b>
                    </div>

                    <img src={isAdded ? "/btn-checked.svg" : "/plus.svg"} alt="plus" className="w-10" />
                </div>
            </div>
        </div>
    )
}