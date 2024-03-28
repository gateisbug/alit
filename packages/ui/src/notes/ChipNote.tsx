import { Chip } from '@ui';

export default function ChipNote() {
  return (
    <article>
      <Chip variant='fill'>hello1</Chip>
      <Chip variant='line'>hello2</Chip>
      <Chip variant='text'>hello3</Chip>
    </article>
  );
}
