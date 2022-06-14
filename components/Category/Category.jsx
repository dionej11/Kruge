import { DIV__CATEGORY, IMG__ICON } from './CategoryStyles';

export const Category = ({ icon }) => {
    return (
        <DIV__CATEGORY>
            <IMG__ICON src={ icon } alt="Categoría"></IMG__ICON>
        </DIV__CATEGORY>        
    )
}