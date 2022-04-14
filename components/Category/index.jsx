import { Category } from './Category';
import { UL__CATEGORIES, SECTION__CATEGORIES } from './styles';

export const Categories = () => {

  const InfoTest = ["🍔", "🚕", "🛍", "🏠", "💃", "👩‍🎓", "🍧","👩‍🎓", "🍧"];

  return (
    <SECTION__CATEGORIES>
      <h2>Categorías: </h2>
      <UL__CATEGORIES>
        {
          InfoTest.map((item, index) => (
            <Category key={`category-${index}`} icon={item} />
          ))
        }
      </UL__CATEGORIES>
    </SECTION__CATEGORIES>
  );
}