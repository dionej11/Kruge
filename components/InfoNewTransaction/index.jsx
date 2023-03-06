import { useContext, useState } from 'react';
import { DIV__INFO_TRASACTION, INPUT__INFO_CATEGORY, INPUT__INFO_DETAILS, SELECT__INFO_TRANSACTION, DIV__CATEGORY, DIV__DATE } from './styles';
import { Context } from '../../context';

export const InfoNewTransaction = () => {

    const { categoriesContext, setCategoriesContext } = useContext(Context);
    const [ selectedCategory, setSelectedCategory ] = useState(); 

    console.log("categoriesContext ", categoriesContext);

    const IconSelected = (e) => {
        let value = e.target.value;
        let icon = categoriesContext.filter((item) => item.name === value )[0].icon;
        setSelectedCategory(icon);
    }

    return (
        <DIV__INFO_TRASACTION>
            <section>
                <h2>Categoría</h2>
                <DIV__CATEGORY>
                    <div>
                        {
                            selectedCategory && <img width={30} src={ selectedCategory } alt="Icono de la categoría" />
                        }
                    </div>
                    <SELECT__INFO_TRANSACTION onChange={(event) => IconSelected(event)}  name="category" id="category">
                        {
                            categoriesContext ? categoriesContext.map((item, index) => (
                                <option key={`Categoría${index}`} value={item.id}>{item.name}</option>
                            )) : null
                        }
                    </SELECT__INFO_TRANSACTION>
                </DIV__CATEGORY>
            </section>
            <section>
                <h2>Fecha</h2>
                <DIV__DATE>
                    <p>📅</p>
                    <INPUT__INFO_CATEGORY type="date" name="date" id="date" />
                </DIV__DATE>
            </section>
            <section>
                <h2>Detalles de la transacción</h2>
                <INPUT__INFO_DETAILS type="text" name="details" id="details" />
            </section>
        </DIV__INFO_TRASACTION>
    )
}