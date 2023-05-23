interface ButtonProps {
	children: Children;
}

const Button = ({ children, ...restProps }: ButtonProps): JSX.Element => <button {...restProps}>Button</button>;

export default Button;
