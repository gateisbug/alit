import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    autoprefixer,
    postcssPresetEnv({
      stage: 1, // stage: 0 은 모든 CSS 특징을 활성화합니다.
      minimumVendorImplementations: 2,
    }),
  ],
};