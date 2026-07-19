import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/header component/Header'
import Search from './components/serch-select component/Search'
import './App.css'
import ProductListView from './components/product components/ProductListView'
import Select from './components/serch-select component/Select'

type Item = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  isAdded?: boolean;
  isFavorited?: boolean;
}

function App() {

  const [sortBy, setSortBy] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState<Item[]>([])
  const [favorites, setFavorites] = useState<Item[]>([])

  const onAddToFavorite = (obj: Item) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      setFavorites((prev) => [...prev, obj]);
    }
  };

  const handleSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = sortBy ? `https://3b721a40e02a4e32.mokky.dev/items?sortBy=${sortBy}` : 'https://3b721a40e02a4e32.mokky.dev/items';
        const response = await axios.get<Item[]>(url);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [sortBy]);

  const filteredItems = items.filter((item) => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.price.toString().includes(searchQuery.toLocaleLowerCase())
  );

  return (
      <div className=" bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
        <Header />

        <div className='flex justify-between items-center'>
          <h2 className='text-3xl font-bold mb-4 mt-8 ml-9'>All Sneakers</h2>
          <div className='flex gap-4 '>
            <Select sortBy={sortBy} handleSortBy={handleSortBy} />
          </div>
          <div>
            <Search value={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </div>

      <div className='p-10'>
        <ProductListView filteredItems={filteredItems} onAddToFavorite={onAddToFavorite} />
      </div>
    </div>
  )
}

export default App
