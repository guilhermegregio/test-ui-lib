import * as emotion from "react-emotion";

const { default: styled } = emotion;

export interface TitleProps {
  size?: number;
}

const Title = styled("h1")`
  font-size: ${(props: TitleProps) => props.size || 2}em;
`;
Title.displayName = "Title";

export default Title;
