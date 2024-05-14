'use client'

import debounce from 'lodash-es/debounce'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import {
  AppBar,
  ArcaLiveLink,
  GithubLink,
  SearchButton,
  Logo,
  ModalBody,
  SearchInput,
  SearchLinks,
} from '@/components/(main)'
import { Modal as ModalUI, ScrollView } from '@ui'

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

      <ModalUI open={open} onClickAway={closeModalHandler}>
        <ModalBody>
          <SearchInput
            onChange={inputValueHandler}
            onClickClose={clickEscapeHandler}
          />

          <ScrollView>
            <div>{inputValue}</div>
            <SearchLinks />
          </ScrollView>
        </ModalBody>
      </ModalUI>
    </AppBar>
  )
}
