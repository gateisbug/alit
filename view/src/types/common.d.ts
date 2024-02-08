type Tier = 'N' | 'R' | 'SR' | 'SSR' | 'UR';

type OptionType<V = string | undefined, L = string | undefined> = {
  value: V;
  label: L;
};
