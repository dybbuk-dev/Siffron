import styled from 'styled-components';

const FormWrapper = styled('div')({
  paddingTop: 0,
  paddingBottom: 0,
});

export const FormButtons = styled('div')({
  paddingTop: '8px',
  paddingBottom: '8px',
  marginLeft: '-4px',
  marginRight: '-4px',
  display: 'flex',

  '& > *': {
    margin: '4px',
  },
});

export default FormWrapper;
