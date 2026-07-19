
import Products from './Products';

type Item = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  isAdded?: boolean;
  isFavorited?: boolean;
}

type ProductListViewProps = {
  filteredItems: Item[];
  onAddToFavorite: (obj: Item) => void;
}

export default function ProductListView( { filteredItems, onAddToFavorite }: ProductListViewProps ) {

    return (
        <div className='grid grid-cols-4 gap-5'>
          {filteredItems.map (item => 
            <Products 
              key={item.id}
              {...item}
              onFavorite={() => onAddToFavorite(item)}
            />
          )}
        </div>
    )
}