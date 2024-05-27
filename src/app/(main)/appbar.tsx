import { AppBar, SearchModalBody } from '@components/(main)'
import { Modal, ScrollView } from '@ui'
import debounce from 'lodash-es/debounce'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ArcaLiveLink, GithubLink, SearchButton } from './links'
import Logo from './logo'
import { SearchInput, SearchLinks, SearchRes } from './search'

function AppBarComponent() {
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

  useEffect(() => {
    setOpen(false)
  }, [params])

  useEffect(() => {
    if (!open) {
      setInputValue('')
    }
  }, [open])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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
            onClickClose={closeModalHandler}
          />

          <ScrollView>
            <div data-search={inputValue.length > 0}>
              <SearchRes value={inputValue} onClickClose={closeModalHandler} />
              <SearchLinks />
            </div>
          </ScrollView>
        </SearchModalBody>
      </Modal>
    </AppBar>
  )
}

export default AppBarComponent;