import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { toggleFilter as toggleFilterAction } from '../../actions';
import { changeFilterValue as changeFilterValueAction } from '../../actions';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 350px;
`;

const NavForm = (props) => {
  const { toggleFilter, changeFilterValue, filterValues } = props;
  const [weightVal, setWeightVal] = useState(filterValues.weight);
  const [heightVal, setHeightVal] = useState(filterValues.height);

  const dispatchInput = (e) => {
    let options = {};
    options.filterName = e.target.dataset.filter;
    options.filterValue = e.target.value;
    changeFilterValue(options);
  }

  const getFilterName = (e) => {
    if(e.target.name === "filters") {
      toggleFilter(e.target.id)
    }
  }

  return (
    <Form className="ml-auto mt-3" 
      onClick={(e) => getFilterName(e)}
    >
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check id="none" value="none" type="radio" name="filters" label={`disable all filters`} defaultChecked="true"/>
        <Form.Check id="weight" value="weight" type="radio" name="filters" label={`tag pokemons heavier than: ${weightVal}`}/>
        <Wrapper>
          <Form.Control 
            type="range"
            min="0" max="500" step="10" value={weightVal}
            onChange={(e) => setWeightVal(e.target.value, "weight")}
            onMouseUp={(e) => dispatchInput(e)}
            onTouchEnd={(e) => dispatchInput(e)}
            data-filter="weight"
          />
        </Wrapper>
      </Form.Group>
      <Form.Group controlId="formBasicRange">
        <Form.Check id="height" value="height" type="radio" name="filters" label={`tag pokemons taller than: ${heightVal}`}/>
        <Wrapper>
          <Form.Control 
            type="range"
            min="0" max="50" value={heightVal}
            onChange={(e) => setHeightVal(e.target.value, "height")}
            onMouseUp={(e) => dispatchInput(e)}
            onTouchEnd={(e) => dispatchInput(e)}
            data-filter="height"
          />
        </Wrapper>
      </Form.Group>
    </Form>
  )
}

const mapStateToProps = state => {
  return {
    filterNames: state.filterNames,
    filterValues: state.filterValues
  };
};

const mapDispatchToProps = dispatch => ({
  toggleFilter: filterName => dispatch(toggleFilterAction(filterName)),
  changeFilterValue: options => dispatch(changeFilterValueAction(options)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(NavForm);