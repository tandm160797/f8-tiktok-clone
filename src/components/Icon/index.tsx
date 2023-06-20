import IcoMoon, { type IconProps as IconPropsBase } from 'react-icomoon';
import iconSet from './selection.json';

// console.log(iconList(iconSet));
const IconNames = [
	'dark-mode',
	'keyboard',
	'language',
	'question',
	'cancel-circle',
	'search',
	'spinner',
	'aqua-tick',
	'more-vertical',
	'tiktok-logo'
] as const;
export interface IconProps extends Omit<IconPropsBase, 'icon'> {
	icon: (typeof IconNames)[number];
}

const Icon = (props: IconProps): React.ReactElement => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
