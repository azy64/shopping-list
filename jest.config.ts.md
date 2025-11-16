import type { Config } from 'jest';
import { createJsWithBabelPreset } from 'ts-jest';

const jsWithBabelPreset = createJsWithBabelPreset({
  tsconfig: 'tsconfig.spec.json',
  babelConfig: true,
});

const jestConfig: Config = {
  preset: 'react-native',
  transform: jsWithBabelPreset.transform,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default jestConfig;   