import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, Input, Button } from './Form.styled';
//  компонент `Form` -відображає форму пошуку фільмів.
const Form = ({ searchMovies }) => {
  // query - значення поля вводу
  const [query, setQuery] = useState('');
  // функції `handleInputChange` -викликається при зміні значення в полі вводу.
  // отримує подію `event` і встановлює нове значення `query` за допомогою функції `setQuery`.
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  // функції `handleSubmit`- викликається при поданні форми.
  // отримує подію `event` і викликає функцію `searchMovies` зі значенням `query`,
  const handleSubmit = event => {
    //  `event.preventDefault()` викликається для того,щоб запобігти перезавантаженню
    // сторінки після натискання кнопки "Submit"
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};
//  `PropTypes` забезпечує контроль типів переданих пропсів у компонент `Form`.
Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Form;
