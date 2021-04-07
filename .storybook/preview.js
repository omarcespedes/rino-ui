import '../src/scss/index.scss';
import { setRootVariable } from '../src/utils/ThemeUtil';

setRootVariable('--primary-color', '#003A61');
setRootVariable('--secondary-color', '#45A5E6');

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
