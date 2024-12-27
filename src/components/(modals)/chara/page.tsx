import { useSearchParams } from 'react-router-dom'

import { ModalClose } from '@components/(common)/modal.tsx'
import Portrait from '@components/(common)/portrait.tsx'
import {
  CharaFleet,
  CharaNatCate,
  CharaStat,
} from '@components/(modals)/chara/components.tsx'
import {
  CharaDataSection,
  CharaModalContents,
  CharaPortrait,
  CloseButton,
  ModalContainer,
} from '@components/(modals)/chara/styled.ts'

interface Props {
  chara: CharacterInterface
}

export default function CharaModal({ chara }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  // const keyword = searchParams.get('keyword')

  const onClose = () => {
    searchParams.delete('modal')
    setSearchParams(searchParams)
  }

  return (
    <ModalContainer>
      <CharaModalContents>
        <CharaPortrait>
          <Portrait
            path={`images/character/${chara?.image}.webp`}
            lqip={`images/character/${chara?.image}_lqip.webp`}
            width={192}
            height={256}
            tier={(chara?.rarity ?? ['R'])[0]}
          />
        </CharaPortrait>
        <CharaDataSection>
          <h2 className='fcs t2 lh'>{chara?.name}</h2>
          <CharaNatCate chara={chara} />
          <CharaStat chara={chara} />
          <CharaFleet chara={chara} />
        </CharaDataSection>
      </CharaModalContents>

      <CloseButton>
        <ModalClose onClick={onClose} />
      </CloseButton>
    </ModalContainer>
  )
}
