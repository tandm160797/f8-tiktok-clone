import IcoMoon, { type IconProps } from 'react-icomoon';
import iconSet from './selection.json';

const Icon = (props: IconProps): JSX.Element => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
