import IcoMoon, { type IconProps as IconPropsBase } from 'react-icomoon';
import iconSet from './selection.json';

// console.log(iconList(iconSet));
const IconNames = ['cancel-circle', 'search', 'spinner', 'aqua-tick', 'more-vertical', 'tiktok-logo'] as const;
interface IconProps extends Omit<IconPropsBase, 'icon'> {
	icon: (typeof IconNames)[number];
}

const Icon = (props: IconProps): JSX.Element => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
