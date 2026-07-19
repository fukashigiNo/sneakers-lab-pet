
type Props = {
    sortBy: string;
    handleSortBy: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ sortBy, handleSortBy }: Props) {

    return (
        <div>
            <select className="py-2 px-3 border rounded-md outline-none" value={sortBy} onChange={handleSortBy}>
                <option value='name'>All Categories</option>
                <option value='price'>Price (cheapest)</option>
                <option value='-price'>Price (most expensive)</option>
            </select>
        </div>
    )
}