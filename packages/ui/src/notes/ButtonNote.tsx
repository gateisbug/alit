import { Button } from '@ui';

export default function ButtonNote() {
  return (
    <article>
      <Button>fill</Button>
      <Button variant='line'>line</Button>
      <Button variant='text'>text</Button>
      <Button disabled>disabled fill</Button>
      <Button disabled variant='line'>
        disabled line
      </Button>
      <Button disabled variant='text'>
        disabled text
      </Button>
      <Button fullWidth>fullWidth</Button>
    </article>
  );
}
