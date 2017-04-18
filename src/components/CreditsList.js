import React, {PropTypes} from 'react';
import Credit from './Credit';

// const CREDITS = [
//   {
//     "id": 1,
//     "name": "til_tweet",
//     "points": 10,
//     "title": "Make a #til Tweet",
//     "description": "Mention @cltjrdevs on Twitter and include #til along with something you learned"
//   },
//   {
//     "id": 2,
//     "name": "resume_site",
//     "points": 100,
//     "title": "Create a Resume Site",
//     "description": "Submit a link to your resume site that includes a way to contact you"
//   },
//   {
//     "id": 3,
//     "name": "linkedin_profile",
//     "points": 50,
//     "title": "Create a LinkedIn Profile",
//     "description": "Submit a link to your LinkedIn profile"
//   }
// ]

const CreditsList = ({credits}) => {
  return (
    <div>
      {credits.map((credit) =>
        <Credit key={credit.id} credit={credit} />
      )}
    </div>
  );
};

CreditsList.propTypes = {
  credits: PropTypes.array.isRequired
};

export default CreditsList;
