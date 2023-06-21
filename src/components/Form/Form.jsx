import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, Input, Button } from './Form.styled';

const Form = ({ searchMovies, query }) => {
  const [inputQuery, setInputQuery] = useState('');

  useEffect(() => {
    setInputQuery(query);
  }, [query]);

  const handleInputChange = event => {
    setInputQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(inputQuery.toLowerCase());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={inputQuery}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Form;
