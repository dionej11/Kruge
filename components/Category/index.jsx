import { Category } from './Category';
import { UL__CATEGORIES } from './styles';

export const Categories = () => {

  const InfoTest = ["🍔", "🚕", "🛍", "🏠", "💃", "👩‍🎓", "🍧","👩‍🎓", "🍧"];

  return (
      <UL__CATEGORIES>
        {
          InfoTest.map((item, index) => (
            <Category key={`category-${index}`} icon={item} />
          ))
        }
      </UL__CATEGORIES>
  );
}