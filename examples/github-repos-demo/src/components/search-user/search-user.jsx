import React from 'react';
import { inject, observer } from 'mobx-react';

import Button from '../button/button';

import './stylesheets/search-user.scss';

const SearchUser = ({ github }) => (
  <div id="SearchUser">
    <div className="content">
      <input
        onChange={event => {
          github.changeUserToSearchFor(event.target.value);
        }}
        type="text"
        placeholder="Github username to find repositories"
      />
      <Button radius="4" onClick={() => github.searchForUser()}>Search</Button>
    </div>
  </div>
);

export default inject('github')(observer(SearchUser));
