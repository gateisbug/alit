import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='page'>
      <h2>Page not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>to Home</Link>
    </div>
  )
}