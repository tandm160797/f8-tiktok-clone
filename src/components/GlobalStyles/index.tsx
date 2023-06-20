import './GlobalStyles.scss';

export interface GlobalStylesProps {
	children: JSX.Element;
}

const GlobalStyles = ({ children }: GlobalStylesProps): JSX.Element => children;

export default GlobalStyles;
