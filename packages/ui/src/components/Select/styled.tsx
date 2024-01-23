import styled from 'styled-components';
import { px, THEME } from './preamble';

export const SelectForm = styled.div.attrs({
  className: px('Form'),
})`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`;

export const SelectField = styled.div.attrs({
  className: px('Field'),
})`
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid transparent;
  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({ theme }) =>
        theme.surface.light ?? THEME.surface?.light};
      border-color: ${({ theme }) => theme.border.light ?? THEME.border?.light};
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${({ theme }) =>
        theme.surface.dark ?? THEME.surface?.dark};
      border-color: ${({ theme }) => theme.border.dark ?? THEME.border?.dark};
    }
  }
`;

export const SelectPlaceholder = styled.span.attrs({
  className: px('Placeholder'),
})`
  color: ${({ theme }) => theme.placeholder ?? THEME.placeholder};
`;

export const SelectContoller = styled.input`
  display: none;
`;

interface SelectBoxTransientProps {
  $open?: boolean;
  $top?: string;
}

export const SelectBox = styled.ul.attrs({
  className: px('Box'),
})<SelectBoxTransientProps>`
  position: absolute;
  top: ${({ $top }) => $top ?? 'calc(100% + 0.5rem)'};
  left: 0;
  right: 0;
  z-index: 1;
  display: ${({ $open }) => (!$open ? 'none' : 'flex')};
  flex-flow: column nowrap;
  border-radius: 0.25rem;
  border: 0.0625rem solid transparent;
  padding: 0;
  margin: 0;

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({ theme }) =>
        theme.surface.light ?? THEME.surface?.light};
      border-color: ${({ theme }) => theme.border.light ?? THEME.border?.light};
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${({ theme }) =>
        theme.surface.dark ?? THEME.surface?.dark};
      border-color: ${({ theme }) => theme.border.dark ?? THEME.border?.dark};
    }
  }
`;

export const SelectItem = styled.li.attrs({
  className: px('Item'),
})`
  list-style: none;
`;

SelectField.defaultProps = {
  theme: THEME,
};

SelectPlaceholder.defaultProps = {
  theme: THEME,
};

SelectBox.defaultProps = {
  theme: THEME,
};
