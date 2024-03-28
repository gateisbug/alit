// noinspection NodeCoreCodingAssistance

import { dts } from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';
import babel from '@rollup/plugin-babel';

// import postcss from 'rollup-plugin-postcss';
// import autoprefixer from 'autoprefixer';
// import postcssPresetEnv from 'postcss-preset-env';
// import cssnano from 'cssnano';

export default [
  {
    input: 'src/index.ts',
    output:  {
      file: 'dist/index.js',
      format: 'esm',
    },
    plugins: [
      // postcss({
      //   extensions: ['.css', '.module.css', '.scss'],
      //   plugins: [
      //     autoprefixer,
      //     postcssPresetEnv({
      //       stage: 1,
      //       minimumVendorImplementations: 2,
      //     }),
      //     cssnano({
      //       preset: 'default'
      //     })
      //   ],
      //   extract: false
      // }),
      swc(defineRollupSwcOption({
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true
          },
          target: "es2015",
          minify: true,
        },
        tsconfig: './tsconfig.json'
      })),
      typescript(),
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: ['.yarn/**', 'dist'],
        presets: [
          '@babel/preset-env',
          '@babel/preset-react'
        ],
        plugins: [
          'babel-plugin-styled-components'
        ]
      })
    ],
    external: ['react', 'react-dom', 'styled-components'],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  }
];