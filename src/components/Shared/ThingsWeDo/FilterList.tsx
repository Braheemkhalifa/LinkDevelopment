import { useEffect, useState } from 'react';

const FilterList = ({ onClickFilter, onDisplayAll, selectedCategory }) => {
  const [categoriesError, setcategoriesError] = useState(null);
  const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch(`https://api.npoint.io/91298d970c27e9a06518/newsCategory`)
      .then(res => res.json())
      .then(
        result => {
          setIsCategoriesLoaded(true);
          setcategories(result);
        },
        error => {
          setIsCategoriesLoaded(true);
          setcategoriesError(error);
        }
      );
  }, []);

  return (
    <>
      {categoriesError && (
        <p className="alert"> Something Wrong Happend, sorry cannot get Categories </p>
      )}

      {!isCategoriesLoaded && !categoriesError && <p className="alert"> Loading ... </p>}
      {categories.length !== 0 && !categoriesError && (
        <div className="filter">
          <button className={`${selectedCategory === 0 && 'active'}`} onClick={onDisplayAll}>
            All News
          </button>
          {categories.map(category => (
            <button
              className={`${selectedCategory === category.id && 'active'}`}
              onClick={() => onClickFilter(category.id)}
              key={category.id}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default FilterList;
