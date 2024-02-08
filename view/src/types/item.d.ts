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

interface ItemInterface {
  index?: number | string;
  name?: string;
  tier?: Tier;
  nickname?: string;
  link?: string;
  nation?: string;
  explain?: string;
  obtain?: string;
  domain?: string;
  class?: string;
  type?: string;
  status?: string;
}
