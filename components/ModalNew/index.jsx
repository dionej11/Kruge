import Image from 'next/image'
import { useContext } from 'react';
import { Context } from '../../context'
import { FaPlus } from 'react-icons/fa';
import { PostCategory } from '../../libs/FetchData';
import { BasicButton } from '@components/Buttons/BasicButton';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { DIV__EDIT_MODAL, INPUT__EDIT_CATEGORY, INPUT__ICONS_LIST } from '@components/Category/styles';

export const NewCategory = ({ modalCreateIsOpen, customStyles, itemNewCategory, setItemNewCategory, option, setOption, IconsURL, setItemNewCategoryIcon, itemNewCategoryIcon, closeModal, setCategories }) => {

    const { Modal } = useContext(Context)
    
    async function createCategory() {

        const newCategory = {
          name: itemNewCategory,
          icon: itemNewCategoryIcon
        }
  
        const data = await PostCategory(newCategory);
        setCategories(data.result);
        closeModal();
      }

    return (
        <Modal
            isOpen={modalCreateIsOpen}
            style={customStyles}
            contentLabel="Crear categoría"
            contentElement={(props, children) => { return <DIV__EDIT_MODAL>
                <h2>Nueva Categoría</h2>
                <label htmlFor="new_category">Nombre</label>
                <INPUT__EDIT_CATEGORY onChange={(event) => setItemNewCategory(event.target.value)} type="text" name="new_category" id="new_category" placeholder='Categoría' />
                <section>
                <label htmlFor="new_category">Icono</label>
                {
                    itemNewCategoryIcon ? 
                        <Image src={itemNewCategoryIcon} width={35} height={35} alt="Icono de la categoría" />
                    : <FaPlus />
                }
                {
                    option ? 
                    <TiArrowSortedUp onClick={() => setOption(!option)} />
                    : <TiArrowSortedDown onClick={() => setOption(!option)} /> 
                }
                
                </section>
                <INPUT__ICONS_LIST>
                {
                    option && IconsURL.map((url) => (
                        <Image key={url} src={url} width={35} height={35} alt="Icono de la categoría" onClick={(e) => { setItemNewCategoryIcon(url) }} />
                    ) 
                    )
                }
                </INPUT__ICONS_LIST>
                <div>
                <BasicButton onClick={createCategory} color="principal">Guardar</BasicButton>
                <BasicButton onClick={closeModal} color="secundario">Cancelar</BasicButton>
                </div>
            </DIV__EDIT_MODAL>}}
            id="modalEdit"
            />
    )
}
