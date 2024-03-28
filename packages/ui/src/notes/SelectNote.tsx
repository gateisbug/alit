import { Select } from '@ui';
import { useState } from 'react';

export default function SelectNote() {
  const [values, setValues] = useState<string[]>([]);
  const onChange = (value: string) => {
    setValues(value.split(','));
  };

  return (
    <article>
      <Select
        onChange={onChange}
        multiple
        items={[
          {
            label: <div>hello 1</div>,
            value: 'hello1',
          },
          {
            label: <div>hello 2</div>,
            value: 'hello2',
          },
          {
            label: <div>hello 3</div>,
            value: 'hello3',
          },
          {
            label: <div>hello 4</div>,
            value: 'hello4',
          },
        ]}
      >
        {values.join(', ')}
      </Select>
    </article>
  );
}
