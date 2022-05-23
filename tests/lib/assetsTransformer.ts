/* eslint-disable @typescript-eslint/no-unused-vars */
import path from 'path';

export default {
  process(src: unknown, filename: string, config: unknown, options: unknown) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
