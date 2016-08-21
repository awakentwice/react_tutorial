import React, { PropTypes } from 'react';

function Item(props) {
  const { employee } = props;

  return (
    <li className="mdl-list__item mdl-list__item--three-line">
      <span className="mdl-list__item-primary-content">
        <span>{employee.name}</span>
        <span className="mdl-list__item-text-body">
          id: {employee.id}<br/>
          gender: {employee.gender}<br/>
          <a href={`mailto:${ employee.email }`}>{employee.email}</a>
        </span>
      </span>
    </li>
  );
}

Item.propTypes = {
  employee: PropTypes.object,
};

export default Item;
