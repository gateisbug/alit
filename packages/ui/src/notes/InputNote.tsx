import { Input } from '@ui';

export default function InputNote() {
  return (
    <article>
      <Input placeholder='default' />
      <Input type='number' placeholder='number' />
      <Input type='date' placeholder='date' />
      <Input type='password' placeholder='password' />
      <Input required placeholder='require' />
      <Input disabled value='disabled' />
      <Input readOnly value='readOnly' />
    </article>
  );
}
