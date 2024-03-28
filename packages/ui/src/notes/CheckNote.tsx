import { Check } from '@ui';

export default function CheckNote() {
  return (
    <article>
      <Check name='check-value' value='hello'>
        hello
      </Check>
      <Check name='check-value' value='hello2'>
        hello2
      </Check>
      <Check name='check-value' value='hello3'>
        hello3
      </Check>
    </article>
  );
}
