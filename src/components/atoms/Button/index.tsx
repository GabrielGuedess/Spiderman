import * as S from './styles';

export type ButtonProps = {
  title: string;
  href: string;
  type?: 'primary' | 'secondary';
};

export const Button = ({ title, href, type = 'primary' }: ButtonProps) => (
  <S.Wrapper type={type} href={href}>
    {title}
  </S.Wrapper>
);
