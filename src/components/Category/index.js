import React from 'react';

const Category = ({ category, changeCategory }) => (
  <div className="categorySwitches">
    <button className="btn btn-secondary" onClick={() => changeCategory(category)}>
      {category}
    </button>
  </div>
  );

Category.propTypes = {
  category: React.PropTypes.string.isRequired,
  changeCategory: React.PropTypes.func.isRequired,
};

Category.defaultProps = {
  category: {},
};
export default Category;
