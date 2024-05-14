'use client'

import debounce from 'lodash-es/debounce'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { AppBar, SearchModalBody } from '@/components/(main)'
import { Modal, ScrollView } from '@ui'

import { ArcaLiveLink, GithubLink, SearchButton } from './links'
import Logo from './logo'
import { SearchInput, SearchLinks, SearchRes } from './search'

export default function AppBarComponent() {
  const params = useParams()
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const searchButtonClickHandler = () => {
    setOpen(true)
  }

  const closeModalHandler = () => {
    setOpen(false)
  }

  const inputValueHandler = debounce((value: string) => {
    setInputValue(value)
  }, 200)

  const clickEscapeHandler = () => {
    setOpen(false)
  }

  useEffect(() => {
    setOpen(false)
  }, [params])

  useEffect(() => {
    if (!open) {
      setInputValue('')
    }
  }, [open])

  return (
    <AppBar>
      <Logo />

      <div className='contents-box'>
        <SearchButton onClick={searchButtonClickHandler} />
        <ArcaLiveLink />
        <GithubLink />
      </div>

      <Modal open={open} onClickAway={closeModalHandler}>
        <SearchModalBody>
          <SearchInput
            onChange={inputValueHandler}
            onClickClose={clickEscapeHandler}
          />

          <ScrollView>
            <div data-search={inputValue.length > 0}>
              <SearchRes value={inputValue} />
              <SearchLinks />
            </div>
          </ScrollView>
        </SearchModalBody>
      </Modal>
    </AppBar>
  )
}
