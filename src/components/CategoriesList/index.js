import React, { PropTypes } from 'react';
import Category from '../Category';

const CategoriesList = ({ categories, changeCategory }) => (
  <div className="row">
    {categories.map(category =>
      <Category
        key={category}
        category={category}
        changeCategory={changeCategory}
      />,
      )}
  </div>
  );

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape).isRequired,
  changeCategory: PropTypes.func.isRequired,
};

export default CategoriesList;
