import React, { Component } from 'react';
import { createSelector } from 'reselect'

import { EMPLOYEES_LIST } from '../constants';
import Filter from './filter'; 
import EmployeesList from './EmployeesList';

export default class PageContainer extends Component {
  state = {
    employeesList: [],
    filter: {},
  }

  componentWillMount() {
    this.setState({ employeesList: EMPLOYEES_LIST });
  }

  filterList = (type, value) => {
    console.warn(type, value);
  }

  render() {
    const { employeesList, filter } = this.state;

    return (
      <div className="mdl-components__page mdl-grid is-active">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="docs-text-styling component-title">
            <h3>Список сотрудников</h3>
          </div>

          <Filter
            filter={filter}
            onFilterChange={this.filterList}
          /> 

          <EmployeesList
            list={employeesList}
          />
        </div>
      </div>
    );
  }
}
