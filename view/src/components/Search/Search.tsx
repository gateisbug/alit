import React from 'react';
import styled from 'styled-components';
import { Button, Input } from '@workspace/ui';
import { SearchIcon } from '@icon';

type ContainerProps = {
  $maxWidth?: string;
};
const Container = styled.div<ContainerProps>`
  width: fit-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  padding: 0.375rem 0.5rem;
  border-radius: 0.25rem;
  overflow-anchor: none;
  border: 0.0625rem solid transparent;
  transition:
    border 500ms cubic-bezier(0.4, 0, 0.2, 1), 
    width 250ms cubic-bezier(0.4, 0, 0.2, 1);

  max-width: ${(props) => props.$maxWidth};
  &:has(input[data-minify='true']) {
    @media (prefers-color-scheme: light) {
      border-color: #0000003a;
    }
    @media (prefers-color-scheme: dark) {
      border-color: #ffffff3a;
    }
  }
`;
Container.defaultProps = {
  $maxWidth: '12.5rem',
};

const Root = styled(Input.Root)`
  display: block;
  line-height: 1.25rem;
  color: var(--font);
  transition:
    padding-left 250ms cubic-bezier(0.4, 0, 0.2, 1),
    width 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &[data-minify='true'] {
    padding-left: 0.5rem;
    width: 100%;
  }
  &[data-minify='false'] {
    padding-left: 0;
    width: 0;
  }
`;

const SearchButon = styled(Button.Root)`
  padding: 0;
  border: none;
`;

interface SearchProps {
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  maxWidth?: string;
  defaultValue?: string;
}

const Search = ({ setValue, maxWidth, defaultValue }: SearchProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [minify, setMinify] = React.useState(false);

  const onChangeInput = React.useCallback(() => {
    setValue && setValue(inputRef.current?.value ?? '');
  }, [setValue, inputRef.current]);

  const onClickButton = React.useCallback(() => {
    setMinify(!minify);
  }, [minify]);

  React.useEffect(() => {
    if (minify) {
      inputRef.current?.removeAttribute('readOnly');
      inputRef.current?.focus();
      inputRef.current?.setAttribute('style', 'width: 180px;');
    } else {
      inputRef.current?.setAttribute('readOnly', 'true');
      inputRef.current?.blur();
      inputRef.current?.setAttribute('style', 'width: 0px;');
    }
  }, [minify]);

  return (
    <Container $maxWidth={maxWidth}>
      <SearchButon $variant='text' onClick={onClickButton}>
        <SearchIcon width='1.25rem' height='1.25rem' />
      </SearchButon>
      <Root
        ref={inputRef}
        onChange={onChangeInput}
        defaultValue={defaultValue}
        placeholder='Search By Keyword'
        data-minify={minify}
      />
    </Container>
  );
};

export default React.memo(Search);
