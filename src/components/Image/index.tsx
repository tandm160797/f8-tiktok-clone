import { cloneElement } from 'react';

import imageSet from '@components/Image/imageSet';
import { toCamelCase } from '@utils';

interface ImageProps {
	image: string;
	width: string | number;
	height: string | number;
	className?: string;
	fill?: string;
}

const Image = ({ image, fill, ...restProps }: ImageProps): JSX.Element =>
	cloneElement(imageSet[toCamelCase(image, '-')], { ...restProps, fill: fill ?? 'inherit' });

export default Image;
