const OBTAINS = [
  {
    index: '이벤트',
    value: '핼러윈의 기우',
    label: 'images/event/Halloween_Hijinks',
  },
  {
    index: '이벤트',
    value: '템페스타의 비밀 조선소',
    label: "images/event/Tempesta's_Secret_Shipyard",
  },
  {
    index: '이벤트',
    value: '허상의 탑',
    label: 'images/event/Virtual_Tower',
  },
  {
    index: '이벤트',
    value: '템페스타와 젊음의 샘',
    label: 'images/event/Tempesta_and_the_Fountain_of_Youth',
  },
  {
    index: '이벤트',
    value: '동절의 북해',
    label: 'images/event/Northern_Overture',
  },
  {
    index: '이벤트',
    value: '새벽녘에 비치는 빙화',
    label: 'images/event/Khorovod_of_Dawn',
  },
  {
    index: '이벤트',
    value: '어리석은 자의 천칭',
    label: "images/event/The_Fool's_Scales",
  },
  {
    index: '이벤트',
    value: '부흥의 찬송가',
    label: 'images/event/Daedalian_Hymn',
  },
  {
    index: '이벤트',
    value: '결상점작전',
    label: 'images/event/Operation_Convergence',
  },
  {
    index: '이벤트',
    value: '극지 폭풍',
    label: 'images/event/Frostfall',
  },
  {
    index: '이벤트',
    value: '디바인 트레지 코미디',
    label: 'images/event/Empyreal_Tragicomedy',
  },
  {
    index: '이벤트',
    value: '비추는 나선의 경해',
    label: 'images/event/Mirror_Involution',
  },
  {
    index: '이벤트',
    value: '짙은 자줏빛의 안개',
    label: 'images/event/Violet_Tempest,_Blooming_Lycoris',
  },
  {
    index: '이벤트',
    value: '깊게 울리는 메아리',
    label: 'images/event/Abyssal_Refrain',
  },
  {
    index: '이벤트',
    value: '맑고 푸른 바다',
    label: 'images/event/Upon_the_Shimmering_Blue',
  },
  {
    index: '이벤트',
    value: '모항춘절(2024)',
    label: 'images/event/Spring_Festive_Fiasco',
  },
  {
    index: '이벤트',
    value: '거듭되는 평행세계',
    label: 'images/event/Parallel_Superimposition',
  },
  {
    index: '이벤트',
    value: '잿빛 폐허',
    label: 'images/event/Revelations_of_Dust',
  },
  {
    index: '이벤트',
    value: '모항춘절(2023)',
    label: 'images/event/Happy_Lunar_New_Year_2023',
  },
  {
    index: '이벤트',
    value: '아이리스의 천사',
    label: 'images/event/Angel_of_the_Iris',
  },
  {
    index: '이벤트',
    value: '빛나는 정원의 맹세',
    label: 'images/event/Pledge_of_the_Radiant_Court',
  },
  {
    index: '이벤트',
    value: '영원한 밤의 환광',
    label: 'images/event/Aurora_Noctis',
  },
  {
    index: '이벤트',
    value: '접해몽화',
    label: 'images/event/Dreamwakers_Butterfly',
  },
  {
    index: '이벤트',
    value: '빛을 쫓는 별의 바다',
    label: 'images/event/Light-Chasing_Sea_of_Stars',
  },
  {
    index: '이벤트',
    value: '설경미종',
    label: 'images/event/Snowrealm_Peregrination',
  },
  {
    index: '이벤트',
    value: '결상점 작전',
    label: 'images/event/Operation_Convergence',
  },
  {
    index: '이벤트',
    value: '만월이 밝아오기 전에',
    label: 'images/event/Effulgence_Before_Eclipse',
  },
  {
    index: '이벤트',
    value: '휘광의 성에서 피어나라',
    label: 'images/event/Light_of_the_Martyrium_Event_Banner',
  },
  {
    index: '이벤트',
    value: '리틀 학원에 어서오세요',
    label: 'images/event/Welcome_to_Little_Academy',
  },
  {
    index: '이벤트',
    value: '격창의 유니버스',
    label: 'images/event/Universe_in_Unison',
  },
  {
    index: '이벤트',
    value: '격주의 폴라리스',
    label: 'images/event/Crescendo_of_Polaris',
  },
  {
    index: '이벤트',
    value: '공명의 패션',
    label: 'images/event/Heart-Linking_Harmony',
  },
  {
    index: '이벤트',
    value: '철익 경풍',
    label: 'images/event/Windborne_Steel_Wings',
  },
  {
    index: '이벤트',
    value: '싸워라 로열 메이드 3rd',
    label: 'images/event/Fight_On,_Royal_Maids!_(Part 3)',
  },
  {
    index: '이벤트',
    value: '제로부터 시작하는 마왕 토벌',
    label: 'images/event/Rising_of_the_Ship_Heroes!',
  },
  {
    index: '이벤트',
    value: '독수리의 서사곡',
    label: "images/event/Aquilifer's_Ballade",
  },
  {
    index: '이벤트',
    value: '오엽각 교차점',
    label: 'images/event/Confluence of Nothingness',
  },
  {
    index: '이벤트',
    value: '오아시스 옛담',
    label: 'images/event/Reflections_of_the_Oasis',
  },
  {
    index: '이벤트',
    value: '몽환의 간주곡',
    label: 'images/event/Interlude_of_Illusions',
  },
  {
    index: '이벤트',
    value: '저편에 핀 꽃의 향기',
    label: "images/event/Spider_Lily's_Redolence",
  },
  {
    index: '이벤트',
    value: '저편에 핀 꽃의 향기',
    label: "images/event/Spider_Lily's_Redolence",
  },
  {
    index: '이벤트',
    value: '정보 대항 모의 테스트',
    label: 'images/event/Charge!_My_Trusty_Steeds!',
  },
  {
    index: '이벤트',
    value: '템페스타와 잠든 바다',
    label: 'images/event/Tempesta_and_the_Sleeping_Sea',
  },
  {
    index: '이벤트',
    value: '새장에 갇힌 신의 빛',
    label: 'images/event/Paradiso_of_Shackled_Light',
  },
  {
    index: '이벤트',
    value: '높은 탑의 장미',
    label: 'images/event/A_Rose_on_the_High_Tower',
  },

  {
    index: '메인',
    value: '',
    label: 'images/obtain/campaign',
  },
  {
    index: '상자깡',
    value: '',
    label: 'images/obtain/techbox',
  },
  {
    index: '장비개발',
    value: '',
    label: 'images/obtain/gearlab',
  },
  {
    index: '군부연구실',
    value: '',
    label: 'images/obtain/research',
  },
  {
    index: '코어샵',
    value: '',
    label: 'images/obtain/coredata',
  },
  {
    index: '수집미션',
    value: '',
    label: 'images/obtain/collection',
  },
  {
    index: '서브미션',
    value: '통상파괴',
    label: 'images/obtain/supply_line_disruption',
  },
  {
    index: '서브미션',
    value: '아카시',
    label: 'images/obtain/akashi',
  },
  {
    index: '건조',
    value: '',
    label: 'images/obtain/building',
  },
  {
    index: '설계도',
    value: '',
    label: 'images/obtain/augmentation',
  },
  {
    index: '몰?루',
    value: '',
    label: 'images/obtain/unknown',
  },
]

Object.freeze(OBTAINS)

export default OBTAINS
