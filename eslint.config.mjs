import globals from 'globals';
import { eslint } from '@ljtang2009/lint-configuration';
import _ from 'lodash';
import {
  dirname,
  join,
} from 'desm';

const __dirname = dirname(import.meta.url);

const baseConfig = _.merge(
  _.cloneDeep(eslint.buildIn.default),
  eslint.stylistic.default,
  {
    languageOptions: {
      sourceType: 'module',
      globals:    {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
);

const baseTSConfig = _.merge(_.cloneDeep(baseConfig), eslint.ts.default);

export default [
  {
    ..._.merge(_.cloneDeep(baseConfig), {
      files:   ['**/*.js', '**/*.cjs', '**/*.mjs'],
      ignores: [
        'dist/**/*',
        'coverage/**/*',
        'build/**/*',
        '.docusaurus/**/*',
      ],
    }),
  },
  // {
  //   ..._.merge(_.cloneDeep(baseTSConfig), {
  //     files:           ['src/**/*.ts'],
  //     ignores:         ['src/**/*.spec.ts'],
  //     languageOptions: {
  //       parserOptions: {
  //         project:         join(import.meta.url, 'tsconfig.json'),
  //         tsconfigRootDir: __dirname,
  //       },
  //     },
  //   }),
  // },
  // {
  //   ..._.merge(_.cloneDeep(baseTSConfig), {
  //     files:           ['src/**/*.spec.ts'],
  //     languageOptions: {
  //       parserOptions: {
  //         project:         join(import.meta.url, 'tsconfig.test.json'),
  //         tsconfigRootDir: __dirname,
  //       },
  //     },
  //   }, eslint.jest.default),
  // },
  {
    ..._.merge(_.cloneDeep(baseTSConfig), {
      files: [
        '*.ts',
      ],
      languageOptions: {
        parserOptions: {
          project:         join(import.meta.url, 'tsconfig.node.json'),
          tsconfigRootDir: __dirname,
        },
      },
    }),
  },
  {
    ..._.merge(_.cloneDeep(eslint.json.default), {
      files:   ['**/*.json', '**/*.jsonc', '**/*.json5'],
      ignores: [
        'coverage/**/*',
        'package.json',
        'build/**/*',
        '.docusaurus/**/*',
      ],
    }),
  },
];
