import clsx from 'clsx';
import { forwardRef, type ComponentPropsWithRef, type ForwardedRef, type ReactNode } from 'react';

import styles from './Popper.module.scss';

interface PopperProps extends ComponentPropsWithRef<'div'> {
	className?: string;
	children: ReactNode;
}

const Popper = forwardRef<HTMLDivElement, PopperProps>(
	({ className = '', children }: PopperProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => (
		<div
			ref={ref}
			className={clsx(styles.popper, {
				[className]: className
			})}
		>
			{children}
		</div>
	)
);

Popper.displayName = 'Popper';
export default Popper;
