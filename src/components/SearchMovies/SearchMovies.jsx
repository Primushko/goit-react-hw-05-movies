import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { Button, Form, Input } from './SearchMovies.styled';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;

    if (!query) {
      toast.error('Please enter something');
      return;
    }

    onSubmit(query);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="query" type="text" placeholder="Search movies" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchMovies;
