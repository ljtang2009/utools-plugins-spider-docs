import { stylelint } from '@ljtang2009/lint-configuration';
import _ from 'lodash';

/** @type {import('stylelint').Config} */
export default {
  ..._.merge(
    stylelint.buildIn.default,
    stylelint.order.default,
    stylelint.prettier.default,
    {
      ignoreFiles: ['coverage/**/*', 'build/**/*', '.docusaurus/**/*'],
    },
  ),
};
