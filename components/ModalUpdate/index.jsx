import Image from 'next/image';
import { useContext } from 'react';
import { Context } from '../../context';
import { BasicButton } from '@components/Buttons/BasicButton';
import { PutCategory, DeleteCategory } from '../../libs/FetchData';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { DIV__EDIT_MODAL, INPUT__EDIT_CATEGORY, INPUT__ICONS_LIST } from '@components/Category/styles';

export const PutCategories = ({ modalEditIsOpen, customStyles, setItemNewCategory, itemNewCategory, itemNewCategoryIcon, option, setOption, IconsURL, setItemNewCategoryIcon, closeModal, itemSelectedState, setCategories }) => {

    const { Modal } = useContext(Context)
    
    async function updateCategory(selected) {

        const newCategory = {
          name: itemNewCategory,
          icon: itemNewCategoryIcon
        }
  
        const data = await PutCategory(newCategory, selected._id);
        setCategories(data.result);
        closeModal();
      }

    async function deleteCategory(selected) {
        const data = await DeleteCategory(selected._id);
        setCategories(data.result);
        closeModal();
    }

    return (
        <Modal
            isOpen={modalEditIsOpen}
            style={customStyles}
            contentLabel="Editar categoría"
            contentElement={(props, children) => { return <DIV__EDIT_MODAL>
                <h2>Editar Categoría</h2>
                <label htmlFor="new_category">Nombre</label>
                <INPUT__EDIT_CATEGORY onChange={(event) => setItemNewCategory(event.target.value)} value={itemNewCategory} type="text" name="new_category" id="new_category" placeholder='Categoría' />
                <section>
                <label htmlFor="new_category">Icono</label>
                <Image src={itemNewCategoryIcon} width={35} height={35} alt="Icono de la categoría" />
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
                    <BasicButton onClick={() => updateCategory(itemSelectedState)} color="principal">Guardar</BasicButton>
                    <BasicButton onClick={closeModal} color="secundario">Cancelar</BasicButton>
                </div>
                <p>⚠️ Eliminar categoría (recuerda que esto eliminará las transacciones de dicha categoría) ⚠️</p>
                <BasicButton width={200} onClick={() => deleteCategory(itemSelectedState)} color="secundario">Eliminar categoría</BasicButton>
            </DIV__EDIT_MODAL>}}
            id="modalEdit"
            />
    )
}
