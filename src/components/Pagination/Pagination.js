import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 10px;
`;

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <StyledWrapper>
      {gotoPrevPage && <Button variant="primary" className="mx-2" onClick={gotoPrevPage}>Previous</Button>}
      {gotoNextPage && <Button variant="primary" className="mx-2" onClick={gotoNextPage}>Next</Button>}
    </StyledWrapper>
  )
}
