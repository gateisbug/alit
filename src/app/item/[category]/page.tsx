import { headers } from 'next/headers';

export default function page() {
  const headersList = headers();
  const headerPathname = headersList.get('x-pathname') || "";
  const headerParams = headersList.get('x-params') || "";

  return (
    <div>
      <span>{headerPathname}</span>
      <span>{new URLSearchParams(headerParams).get('filter')}</span>
    </div>
  )
}