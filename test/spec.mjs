import { is } from '@magic/test'
import * as Picture from '../src/index.mjs'

export default [
  {
    fn: () => Picture.View,
    expect: is.function,
    info: 'expect Picture.View to be a function',
  },
]
