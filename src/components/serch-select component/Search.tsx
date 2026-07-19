

type SearcProps = {
    value: string;
    setSearchQuery: (query: string) => void;
}

export default function Search({ value, setSearchQuery }: SearcProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className="flex relative">
            <img src="/search.svg" alt="search" className="mr-3 absolute top-3 left-4"/>
            <input
            onChange={handleChange}
            value={value} 
            type="text"
            placeholder="Search sneakers..." 
            className="border rounded-md py-2 pl-11 pr-4 mr-4 outline-none focus:border-blue-500 w-64"
            />
        </div>
    )
}