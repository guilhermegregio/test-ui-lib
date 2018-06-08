import styled from "react-emotion";
import { StyledOtherComponent } from "create-emotion-styled";

export interface TitleProps {
  size?: number;
}

const Title: StyledOtherComponent<TitleProps, {}, {}> = styled("h1")`
  font-size: ${props => props.size || 2}em;
`;
Title.displayName = "Title";

export default Title;
