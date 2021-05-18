import React from 'react';
import PropTypes from 'prop-types';

import './FilterList.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import FilterItem from './FilterItem.js'


export default class FilterList extends React.Component {
    static propTypes = {
        filter: PropTypes.array
    };

    constructor(props) {
        super(props);
        this.handleClear = this.handleClear.bind(this);
    }

    render() {
        const {filter} = this.props;
        
        let children = filter.map(p =>(
            <ListGroupItem className='filter-list'>
                <FilterItem text={p} handleClear={this.handleClear}/>
            </ListGroupItem>
        ));
        return (
            <div className='filter-list'>
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }

    handleClear(text){
        this.props.handleClear(text);
    }
    
}
