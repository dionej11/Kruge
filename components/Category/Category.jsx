import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';
import { DIV__CATEGORY, IMG__ICON, DIV__EDIT, P__NAME } from './CategoryStyles';
  
export const Category = ({ name, icon, id, selected, openModal }) => {

    return (
        <DIV__CATEGORY stylesSelected = {id === selected}>
            {
                id === selected && <DIV__EDIT onClick={openModal}>
                    <Image src="/Edit.svg" alt="Icono decorativo para editar" height={15} width={15} />
                </DIV__EDIT>
            }
            { icon ? <IMG__ICON src={ icon } alt="Categoría" /> : <FaPlus onClick={openModal} width={40} height={40} /> }
            <P__NAME>{name}</P__NAME>
        </DIV__CATEGORY>        
    )
}