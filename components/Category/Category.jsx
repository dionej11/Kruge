import Image from 'next/image';
import { DIV__CATEGORY, IMG__ICON, DIV__EDIT, P__NAME } from './CategoryStyles';

export const Category = ({ name, icon, id, selected }) => {

    return (
        <DIV__CATEGORY stylesSelected = {id === selected}>
            {
                id === selected && <DIV__EDIT>
                    <Image src="/Edit.svg" alt="Icono decorativo para editar" height={15} width={15} />
                </DIV__EDIT>
            }
            <IMG__ICON src={ icon } alt="Categoría"></IMG__ICON>
            <P__NAME>{name}</P__NAME>
        </DIV__CATEGORY>        
    )
}