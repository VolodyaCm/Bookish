import React from 'react'
import TextField from '@material-ui/core/TextField/TextField';

const SearchBox = ({ term, onSearch }) => {
  const changeTerm = (e) => {
    const value = e.target.value;
    if (value.trim() !== '') {
      return onSearch(e);
    }
  }

  return (
    <TextField
      label='Search'
      value={term}
      data-test='search'
      onChange={changeTerm}
      margin='normal'
      variant='outlined' />
  )
}

export default SearchBox;
