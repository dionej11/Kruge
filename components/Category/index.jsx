import { useEffect, useState, useContext } from 'react';
import Cookie from 'js-cookie';
import { Category } from './Category';
import { UL__CATEGORIES, SECTION__CATEGORIES } from './styles';

import { Context } from '../../context';
import { IconsURL } from '../../libs/Icons';
import { GetCategories } from '../../libs/FetchData';
import { PutCategories } from '@components/ModalUpdate'
import { NewCategory } from '@components/ModalNew'

// Estilos generales de los modal's
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {zIndex: 1000}
};

export const Categories = () => {
  
  // Estados de las categorías
  const [Categories, setCategories] = useState();
  const { filterTransactions, setFilterTransactions, setCategoriesContext } = useContext(Context)
  
  // Estados para manejar la categoría seleccionada (clic)
  const [selectedCategory, setSelectedCategory] = useState();
  const [itemSelectedState, setItemSelectedState] = useState();

  // Estados de lo ingresado en el modal (name, icon)
  const [itemNewCategory, setItemNewCategory] = useState();
  const [itemNewCategoryIcon, setItemNewCategoryIcon] = useState();
  // Estado para mostrar la lista de iconos
  const [option, setOption] = useState(false);

  useEffect(() => {

    const getCategories = async () => {

          const data = await GetCategories();
          setCategories(data.result);
          setCategoriesContext(data.result);
      }
      getCategories();
  }, []);

  async function fetchCategorySelected(event, Id) {

    if (Id === selectedCategory) {
      setSelectedCategory(null);
      setFilterTransactions(null);
    } else {      
      setSelectedCategory(Id);
      
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

  // MODAL - UPDATE
  const [modalEditIsOpen, setIsOpenEdit] = useState(false);
  // MODAL - CREATE
  const [modalCreateIsOpen, setIsOpenCreate] = useState(false);

    function openModal() {
        setItemSelectedState(itemSelected);
        setItemNewCategory(itemSelected.name)
        setItemNewCategoryIcon(itemSelected.icon)
        setIsOpenEdit(true);
    }

    function closeModal(stateModal) {
        setOption(false);
        stateModal(false);
    }

  return (
    <SECTION__CATEGORIES>
      <h2>Categorías: </h2>
      <UL__CATEGORIES>
        <li>
          <Category openModal={() => { setIsOpenCreate(true) }} name="Nueva" id={0} selected={selectedCategory} />
        </li>
        {
          selectedCategory && 
          <li onClick={(event) => fetchCategorySelected(event, itemSelected._id)} key={`category-${SelectedElementCategory}`}>
            <Category openModal={openModal} name={itemSelected.name} icon={itemSelected.icon} id={itemSelected._id} selected={selectedCategory} />
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
      {/** MODAL PARA ACTUALIZAR */}
      <PutCategories {...{ modalEditIsOpen, customStyles, setItemNewCategory, itemNewCategory, itemNewCategoryIcon, option, setOption, IconsURL, setItemNewCategoryIcon, closeModal: () => { closeModal(setIsOpenEdit) }, itemSelectedState, setCategories, setCategoriesContext}} />
      {/** MODAL PARA CREAR */}
      <NewCategory {...{modalCreateIsOpen, customStyles, itemNewCategory, setItemNewCategory, option, setOption, IconsURL, setItemNewCategoryIcon, itemNewCategoryIcon, closeModal: () => { closeModal(setIsOpenCreate) }, setCategories, setCategoriesContext}} />
    </SECTION__CATEGORIES>
  );
}