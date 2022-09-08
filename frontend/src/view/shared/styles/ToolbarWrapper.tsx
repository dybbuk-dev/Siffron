import { styled } from '@mui/material/styles';

const ToolbarWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
  flexWrap: 'wrap',

  '& > *': {
    marginBottom: '8px !important',
    marginRight: '8px !important',
  },
});

export default ToolbarWrapper;
