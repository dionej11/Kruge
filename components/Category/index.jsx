import { Category } from './Category';
import { UL__CATEGORIES, SECTION__CATEGORIES } from './styles';
import Cookie from 'js-cookie';
import { useEffect, useState, useContext } from 'react';

import { Context } from '../../context';

export const Categories = () => {
  
  const [Categories, setCategories] = useState();
  const [filterTransactions, setFilterTransactions] = useContext(Context)

  useEffect(() => {

    const getCategories = async () => {

        const response = await fetch('http://localhost:3000/categories', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookie.get('JWT'),
              }
          });
          const data = await response.json();
          // Dejo este console.log para ver lo que devuelve jaja además esto después sería bueno guardarlo en el contexto para usarlo en toda la aplicación 👍
          setCategories(data.result);
          console.log(data);
      }
      getCategories();
  }, []);

  async function fetchCategorySelected(Id) {

    if (filterTransactions && filterTransactions.length > 0) {
      if (filterTransactions[0].categoryObject[0]._id === Id) {
        setFilterTransactions(null);
      } 
    } else {
      const response = await fetch(`http://localhost:3000/history_transactions/${Id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookie.get('JWT'),
          }
      });
      const data = await response.json();
      setFilterTransactions(data.result);
    }
    
  }

  return (
    <SECTION__CATEGORIES>
      <h2>Categorías: </h2>
      <UL__CATEGORIES>
        {
          Categories &&
          Categories.reverse().map((item, index) => (
            <span onClick={() => fetchCategorySelected(item._id)} key={`category-${index}`}>
              <Category icon={item.icon} />
            </span>
          ))
        }
      </UL__CATEGORIES>
    </SECTION__CATEGORIES>
  );
}