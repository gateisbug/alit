import { Helmet } from 'react-helmet-async'

export default function Fonts() {
  // noinspection JSUnresolvedLibraryURL
  return (
    <>
      <Helmet>
        <link
          rel='stylesheet'
          as='style'
          crossOrigin='anonymous'
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css'
        />
      </Helmet>
    </>
  )
}
