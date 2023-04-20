import { TableStyles } from 'react-data-table-component';
import { colors } from '@/styles/colors';

export const primaryTheme: TableStyles = {
  table: {
    style: {
      backgroundColor: 'transparent',
      overflow: 'auto',
    },
  },
  headRow: {
    style: {
      border: 'none !important',
      backgroundColor: 'transparent',
      fontSize: '1rem',
      fontWidth: '400',
      fontWeight: '400',
    },
  },
  rows: {
    style: {
      minWidth: '960px !important',
      minHeight: '5.188rem !important',
      border: 'none !important',
      borderRadius: '10px',
      backgroundColor: '#FFF',
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.02)',
      marginBottom: '30px',
      fontSize: '0.75rem',
      fontWidth: '300',
      fontWeight: '300',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: "#f5f5f5",
      },
    },
  },
  headCells: {
    style: {
      paddingLeft: '20px',
      paddingRight: '10px',
    },
  },
  cells: {
    style: {
      paddingLeft: '20px',
      paddingRight: '10px',
    },
  },
};