import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


export const SearchButton = () => {
  return (
      <Button as={NavLink} activeClassName="active" exact to="/SymptomList" key='kanbanAdd'>
        Search
      </Button>
  )
}
export default SearchButton;