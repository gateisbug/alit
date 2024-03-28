import { Textarea } from '@ui';

export default function TextareaNote() {
  return (
    <article>
      <Textarea
        autoResize
        onChange={(e) => {
          console.log('Textarea', e.target.value);
        }}
      />
    </article>
  );
}
