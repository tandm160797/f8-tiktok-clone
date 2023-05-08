import './GlobalStyles.scss';

interface GlobalStylesProps {
	children: JSX.Element;
}

const GlobalStyles = ({ children }: GlobalStylesProps): JSX.Element => children;

export default GlobalStyles;
