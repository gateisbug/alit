type ItemInterfaceIndex =
  | 'index'
  | 'name'
  | 'tier'
  | 'nickname'
  | 'link'
  | 'nation'
  | 'explain'
  | 'obtain'
  | 'domain'
  | 'class'
  | 'type'
  | 'status';

type ItemURL =
  | 'all'
  | 'gun'
  | 'torpedo'
  | 'antiair'
  | 'aircraft'
  | 'accessory'
  | 'special';

interface ItemInterface {
  index?: number | string;
  name?: string;
  tier?: TierType;
  nickname?: string;
  image?: string;
  link?: string;
  nation?: string;
  explain?: string[];
  obtain?: string[];
  domain?: string;
  class?: string;
  type?: string;
  status?: string[];
}
