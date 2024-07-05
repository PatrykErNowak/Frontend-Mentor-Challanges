import styled from 'styled-components';
import IconContainer from './IconContainer';
import { FormEvent, useState } from 'react';
import Button from './Button';
import { useDarkMode } from '../context/DarkModeContext';
import { breakpoint } from '../styles/config';
import { getUser, noResultsErrorMessage } from '../services/apiGithubUser';
import { useQuery } from '@tanstack/react-query';
import Container from './Container';

const StyledSearchForm = styled(Container)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 0.7rem 0.7rem 0.7rem 1.5rem;
  @media screen and (min-width: ${breakpoint.tablet}) {
    padding: 0.95rem 1rem 0.95rem 3.2rem;
  }
`;

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`;
const Input = styled.input.attrs({ type: 'text' })`
  width: 100%;
  font-size: 1.3rem;
  color: var(--text-color);
  border: transparent;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${breakpoint.tablet}) {
    font-size: 1.8rem;
  }
`;

const Error = styled.span`
  position: absolute;
  right: 1rem;
  font-weight: 700;
  color: var(--error-color);
`;

function SearchForm() {
  const [query, setQuery] = useState('octocat');
  const { isDarkMode } = useDarkMode();
  const { refetch, error } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(query),
    enabled: true,
    retry: false,
  });
  const isNoResultsError = error?.message === noResultsErrorMessage;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    refetch();
  }

  return (
    <StyledSearchForm as="form" onSubmit={handleSubmit} $mode={isDarkMode ? 'dark' : 'light'}>
      <Label htmlFor="user">
        <IconContainer>
          <SearchIcon />
        </IconContainer>
        <Input type="text" name="user" id="user" placeholder="Search GitHub username…" value={query} onChange={(e) => setQuery(e.currentTarget.value)} />
        {isNoResultsError && <Error>No results</Error>}
      </Label>
      <Button>search</Button>
    </StyledSearchForm>
  );
}

export default SearchForm;

function SearchIcon() {
  return (
    <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
        fill="#0079ff"
      />
    </svg>
  );
}
