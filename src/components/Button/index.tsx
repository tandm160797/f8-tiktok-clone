import clsx from 'clsx';
import {
	type ForwardRefExoticComponent,
	type MouseEvent,
	type ReactElement,
	type ReactNode,
	type RefAttributes
} from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import styles from './Button.module.scss';

export interface ButtonProps {
	to?: string;
	href?: string;
	disabled?: boolean;
	fullWidth?: boolean;
	className?: string;
	size?: 'small' | 'middle' | 'large';
	shape?: 'default' | 'circle' | 'round';
	variant?: 'default' | 'text' | 'primary' | 'outline';
	prefixIcon?: ReactNode;
	suffixIcon?: ReactNode;
	children?: ReactNode;
	onClick?: (event: MouseEvent<HTMLElement>) => void;
	[key: string]: any;
}

const Button = ({
	to = '',
	href = '',
	disabled = false,
	fullWidth = false,
	className = '',
	size = 'middle',
	shape = 'default',
	variant = 'default',
	prefixIcon,
	suffixIcon,
	children,
	onClick,
	...restProps
}: ButtonProps): ReactElement => {
	let Component: 'a' | 'button' | ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>> = 'button';

	const props: any = {
		onClick,
		...restProps
	};

	if (disabled) {
		props.disabled = disabled;
		for (const key in props) {
			if (typeof props[key] === 'function' && key.startsWith('on')) {
				delete props[key];
			}
		}
	}

	if (to) {
		props.to = to;
		Component = Link;
	} else if (href) {
		props.href = href;
		Component = 'a';
	}

	return (
		<Component
			className={clsx(styles.button, {
				[className]: className,

				[styles.fullWidth]: fullWidth,

				[styles.circle]: shape === 'circle',
				[styles.round]: shape === 'round',

				[styles.small]: size === 'small',
				[styles.large]: size === 'large',

				[styles.text]: variant === 'text',
				[styles.primary]: variant === 'primary',
				[styles.outline]: variant === 'outline'
			})}
			{...props}
		>
			{prefixIcon && <span className={styles.icon}>{prefixIcon}</span>}
			<span className={styles.title}>{children}</span>
			{suffixIcon && <span className={styles.icon}>{suffixIcon}</span>}
		</Component>
	);
};

export default Button;
