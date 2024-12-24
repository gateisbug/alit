import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import GlobalHeader from '@app/@global-header/page.tsx'

export default function ItemLayout() {
  return (
    <>
      <Helmet>
        {/* @TODO: [2.5.0] 버전업 시 수정 */}
        <meta
          name='description'
          content='장비설명회 웹버전. 마지막 업뎃:24-12-31. UI/UX 수정'
        />
        <meta property='og:site_name' content='장비설명회 웹버전' />
        <meta property='og:title' content='장비설명회 웹버전' />
        <meta
          property='og:description'
          content='마지막 업뎃:24-12-31. UI/UX 수정'
        />
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/gateisbug/alit/refs/heads/master/public/assets/og-image.png'
        />

        <title>(24-12-31) 장비 설명회.Web</title>
      </Helmet>
      <GlobalHeader />
      <Outlet />
    </>
  )
}
