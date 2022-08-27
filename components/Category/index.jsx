import { Category } from './Category';
import { UL__CATEGORIES, SECTION__CATEGORIES } from './styles';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';

export const Categories = () => {

  const [Categories, setCategories] = useState();

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

  return (
    <SECTION__CATEGORIES>
      <h2>Categorías: </h2>
      <UL__CATEGORIES>
        {
          Categories &&
          Categories.reverse().map((item, index) => (
            <Category key={`category-${index}`} icon={item.icon} />
          ))
        }
      </UL__CATEGORIES>
    </SECTION__CATEGORIES>
  );
}