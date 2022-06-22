const useGetCategoryTitle = (categories, id) => {
  const selectedCategory = categories.filter(category => category.id == id);
  const categoryTitle = selectedCategory[0] ? selectedCategory[0].name : 'uncategorized';
  return categoryTitle;
};

export default useGetCategoryTitle;
