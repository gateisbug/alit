import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export default function ItemLayout() {
  return (
    <>
      <Helmet>
        {/* <meta name='description' content='장비설명회 웹버전. 마지막 업뎃:24-12-31. UI/UX 수정' /> */}
        {/* <meta property='og:site_name' content='장비설명회 웹버전' /> */}
        {/* <meta property='og:title' content='장비설명회 웹버전' /> */}
        {/* <meta property='og:description' content='마지막 업뎃:24-12-31. UI/UX 수정' /> */}
        {/* <meta property='og:image' content='https://raw.githubusercontent.com/gateisbug/alit/refs/heads/master/public/assets/og-image.png' /> */}

        {/* @TODO: [2.6.1] 버전업 시 수정 */}
        <title>(25-03-31) 장비 설명회.Web</title>
      </Helmet>

      <Outlet />
    </>
  )
}
