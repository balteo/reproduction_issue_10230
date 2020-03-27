import { configure, addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withStorySource } from '@storybook/addon-storysource';

addDecorator(withKnobs);
addDecorator(withStorySource);
configure(require.context('../src/lib', true, /\.stories\.tsx?$/), module);
