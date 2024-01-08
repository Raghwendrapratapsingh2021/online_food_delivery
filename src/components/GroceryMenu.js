// ... your other imports
import { useLocation } from 'react-router-dom';
import GrossMenuCard from './GrossMenuCard';

const GroceryMenu = () => {
  const { state } = useLocation();
  const subcategories = state?.subcategories || [];

  console.log(subcategories);

  return (
    <div>
      {subcategories.map((subcategory, index) => (
        <GrossMenuCard key={index} resData={subcategory} />
      ))}
    </div>
  );
}

export default GroceryMenu;
