import { Badge, Button, Chip } from '@ui';
import { useState } from 'react';

export default function BadgeNote() {
  const [count, setCount] = useState(0);

  return (
    <article>
      <Badge content={99} variant='dot' theme={{ primary: '#f50057' }}>
        <Button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </Button>
      </Badge>
      <Badge content={99} variant='standard' theme={{ primary: '#f50057' }}>
        <Chip>count is {count}</Chip>
      </Badge>
      <Badge content={100} variant='standard' theme={{ primary: '#f50057' }}>
        <Chip>count is {count}</Chip>
      </Badge>
    </article>
  );
}
