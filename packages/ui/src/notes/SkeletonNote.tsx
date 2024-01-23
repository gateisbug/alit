import { Skeleton } from '@ui';

export default function SkeletonNote() {
  return (
    <article>
      <Skeleton varient='circle' style={{ width: 48, height: 48 }} />
      <Skeleton varient='text' style={{ width: '25%', height: 24 }} />
      <Skeleton varient='paragraph' style={{ width: '25%', height: 48 }} />
    </article>
  );
}
