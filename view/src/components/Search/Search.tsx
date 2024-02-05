import React from 'react';
import styled from 'styled-components';
import { Input, Select, useClickAway } from '@workspace/ui';
import { SearchIcon } from '@icon';

const Form = styled(Select.Form)`
  max-width: 12.5rem;
`

const Field = styled(Select.Field)`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  color: var(--primary);
`;

const Root = styled(Input.Root)`
  line-height: 1.25rem;
  color: var(--font);
`;

type SearchItemType = {
  onClick?: React.MouseEventHandler;
  render: React.ReactNode;
};

interface SearchProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  items: SearchItemType[];
  defaultValue?: string;
}

const Search = ({ setValue, defaultValue, items }: SearchProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const formRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState<boolean>(false);

  const _formRef = useClickAway(setOpen, formRef);

  const onChangeInput = React.useCallback(() => {
    setOpen((inputRef.current?.value.length ?? 0) > 0);
    setValue && setValue(inputRef.current?.value ?? '');
  }, [setValue, inputRef.current]);

  return (
    <Form ref={_formRef}>
      <Field>
        <SearchIcon width='1.25rem' height='1.25rem' />
        <Root
          ref={inputRef}
          onChange={onChangeInput}
          defaultValue={defaultValue}
          placeholder='Filter By Keyword'
        />
      </Field>
      <Select.Box $open={open}>
        {items.map((v, i) => (
          <Select.Item key={`select_${i}`} onClick={v.onClick}>
            {v.render}
          </Select.Item>
        ))}
      </Select.Box>
    </Form>
  );
};

export default React.memo(Search);
