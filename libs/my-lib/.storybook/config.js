import { configure } from "@storybook/angular";

configure(require.context('../src/lib', true, /\.stories\.tsx?$/), module);
