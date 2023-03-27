import { useContext, useEffect, useState } from 'react';
import { DIV__INFO_TRASACTION, INPUT__INFO_CATEGORY, INPUT__INFO_DETAILS, SELECT__INFO_TRANSACTION, DIV__CATEGORY, DIV__DATE } from './styles';
import { Context } from '../../context';

export const InfoNewTransaction = ({ info, setInfo }) => {

    useEffect

    const { categoriesContext, setCategoriesContext } = useContext(Context);
    const [ selectedCategory, setSelectedCategory ] = useState(); 

    const IconSelected = (e) => {
        let value = e.target.value;
        let icon = categoriesContext.filter((item) => item._id === value )[0].icon;
        setSelectedCategory(icon);

        setInfo((prevState) => {
            return {
                ...prevState,
                category: e.target.value
            }
        })
    }

    const handlerDate = (e) => {

        let dateFormat = e.target.value.split("-");

        setInfo((prevState) => {
            return {
                ...prevState,
                date: dateFormat[2]+"/"+dateFormat[1]+"/"+dateFormat[0]
            }
        })
    }
    
    const handlerDetails = (e) => {
        setInfo((prevState) => {
            return {
                ...prevState,
                details: e.target.value
            }
        })
    }

    return (
        <DIV__INFO_TRASACTION>
            <section>
                <p>Categoría</p>
                <DIV__CATEGORY>
                    <div>
                        {
                            selectedCategory && <img width={30} src={ selectedCategory } alt="Icono de la categoría" />
                        }
                    </div>
                    <SELECT__INFO_TRANSACTION onChange={(event) => IconSelected(event)}  name="category" id="category">
                        {
                            categoriesContext ? categoriesContext.map((item, index) => (
                                <option key={`Categoría${index}`} value={item._id}>{item.name}</option>
                            )) : null
                        }
                    </SELECT__INFO_TRANSACTION>
                </DIV__CATEGORY>
            </section>
            <section>
                <p>Fecha</p>
                <DIV__DATE>
                    <p>📅</p>
                    <INPUT__INFO_CATEGORY onChange={(event) => handlerDate(event)} type="date" name="date" id="date" />
                </DIV__DATE>
            </section>
            <section>
                <p>Detalles de la transacción</p>
                <INPUT__INFO_DETAILS onChange={(event) => handlerDetails(event)} type="text" name="details" id="details" />
            </section>
        </DIV__INFO_TRASACTION>
    )
}