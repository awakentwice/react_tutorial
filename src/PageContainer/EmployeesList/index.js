import React, { PropTypes } from 'react';

import Item from './Item';

function EmployeesList(props) {
  return (
    <div className="mdl-layout">
      <div className="mdl-layout__content">
        <ul className="mdl-list">
          {props.list.map((item, index) => (
            <Item key={index} employee={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

EmployeesList.propTypes = {
  list: PropTypes.array,
};

EmployeesList.defaultProps = {
  list: [],
};

export default EmployeesList;
