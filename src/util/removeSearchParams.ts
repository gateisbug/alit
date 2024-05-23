// import { headers } from 'next/headers'
// import { useRouter } from 'next/router'
//
// const removeSearchParams = () => {
//   const headersList = headers()
//   const headerPathname = headersList.get('x-pathname') || ''
//   const headerParams = headersList.get('x-params') || ''
//
//   const router = useRouter()
//
//   const handleClick = async () => {
//     const params = new URLSearchParams(headerParams)
//     params.delete('search')
//
//     await router.push(`${headerPathname}?${params.toString()}`, undefined, {
//       shallow: true,
//     })
//   }
// }
//
// export default removeSearchParams
