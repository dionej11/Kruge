import { Category } from './Category';
import { UL__CATEGORIES, SECTION__CATEGORIES } from './styles';
import Cookie from 'js-cookie';
import { useEffect, useState, useContext } from 'react';

import { Context } from '../../context';

export const Categories = () => {
  
  const [Categories, setCategories] = useState();
  const { filterTransactions, setFilterTransactions, categoriesContext, setCategoriesContext } = useContext(Context)
  const [selectedCategory, SetSelectedCategory] = useState();

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
          setCategoriesContext(data.result);
      }
      getCategories();
  }, []);

  async function fetchCategorySelected(event, Id) {

    if (Id === selectedCategory) {
      SetSelectedCategory(null);
      setFilterTransactions(null);
    } else {      
      SetSelectedCategory(Id);
      
      let ScrollElement = event.target.parentElement.parentElement.parentElement;
      ScrollElement.scrollLeft = 0;

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

  let SelectedElementCategory;
  let itemSelected;

  if (selectedCategory) {
    
    SelectedElementCategory = Categories.findIndex((item) => {
        return item._id === selectedCategory
    })

    itemSelected = Categories[SelectedElementCategory]
  }

  return (
    <SECTION__CATEGORIES>
      <h2>Categorías: </h2>
      <UL__CATEGORIES>
        {
          selectedCategory && 
          <li onClick={(event) => fetchCategorySelected(event, itemSelected._id)} key={`category-${SelectedElementCategory}`}>
            <Category name={itemSelected.name} icon={itemSelected.icon} id={itemSelected._id} selected={selectedCategory} />
          </li>
        }
        {
          Categories &&
          Categories.map((item, index) => {
          
          if (item._id !== selectedCategory) {
            return (
              <li onClick={(event) => fetchCategorySelected(event, item._id)} key={`category-${index}`}>
                <Category name={item.name} icon={item.icon} id={item._id} selected={selectedCategory} />
              </li>
            )
          }
          })
        } 
      </UL__CATEGORIES>
    </SECTION__CATEGORIES>
  );
}