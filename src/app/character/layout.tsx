import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export default function CharacterLayout() {
  return (
    <>
      <Helmet>
        {/* <meta name='description' content='함순이 리스트. 마지막 업뎃:24-12-31. 함순이 리스트 추가' /> */}
        {/* <meta property='og:site_name' content='함순이 리스트' /> */}
        {/* <meta property='og:title' content='함순이 리스트' /> */}
        {/* <meta property='og:description' content='마지막 업뎃:24-12-31. 함순이 리스트 추가' /> */}
        {/* <meta property='og:image' content='https://raw.githubusercontent.com/gateisbug/alit/refs/heads/master/public/assets/og-image.png' /> */}

        {/* @TODO: [2.6.2] 버전업 시 수정 */}
        <title>(25-06-18) 함순이 리스트.Web</title>
      </Helmet>

      <Outlet />
    </>
  )
}
