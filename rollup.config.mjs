import resolve from '@rollup/plugin-node-resolve';
import multi from '@rollup/plugin-multi-entry';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import styles from "rollup-styles";

// You'll need to create an object per library bundle
const config = [
  {
    input: ['src/app/bundles/shoelace.ts'],
    output: [
      {
        file: 'public/shoelace/shoelace.bundle.js',
        name: 'shoelace-bundle',
        format: 'umd',
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), multi(), terser()],
  },
  {
    input: ['src/app/bundles/kemet.ts'],
    output: [
      {
        file: 'public/kemet/kemet.bundle.js',
        name: 'kemet-bundle',
        format: 'umd',
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), styles(), multi(), terser()],
  },
];

export default config;
