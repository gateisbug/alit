import { Radio } from '@ui';

export default function RadioNote() {
  return (
    <article>
      <Radio name='radio-value' value='world'>
        world
      </Radio>
      <Radio name='radio-value' value='world2'>
        world2
      </Radio>
      <Radio name='radio-value' value='world3'>
        world3
      </Radio>
    </article>
  );
}
