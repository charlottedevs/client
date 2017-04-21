import React, { PropTypes } from 'react';
import Credit from './Credit';

const CreditsList = ({ credits, selectCredit }) => (
  <div className="row">
    {credits.map(credit =>
      <Credit
        key={credit.id}
        credit={credit}
        selectCredit={selectCredit}
      />,
      )}
  </div>
  );

CreditsList.propTypes = {
  credits: PropTypes.arrayOf(PropTypes.shape).isRequired,
  selectCredit: PropTypes.func.isRequired,
};

export default CreditsList;
