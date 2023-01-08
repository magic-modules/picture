export const View = state => [
  h1(state.title),

  p([
    'this is the ',
    Link({ text: '@magic-modules', to: 'https://github.com/magic-modules' }),
    ' Picture component.',
  ]),

  p('wraps <picture> to load modern image formats with fallbacks to jpg|png|gif.'),

  h2({ id: 'installation' }, 'installation'),

  Pre(`npm install --save-exact @magic-modules/picture`),

  h2({ id: 'usage' }, 'usage'),

  h3('markdown:'),

  Pre(`<Picture name="image"></Picture>`),

  h3('javascript:'),
  Pre(`
Picture({
  name: 'image',
})
  `),

  p('both examples above output:'),

  Pre(`
<picture class="Picture">
  <source type="image/avif" srcset="/image.avif">
  <source type="image/webp" srcset="/image.webp">
  <img loading="lazy" alt="" role="presentation" src="/image.jpg">
</picture>
  `),

  p('example:'),

  Picture({
    name: 'image',
  }),

  h3('default values'),

  p('the following code snippet shows the default values'),

  Pre(`
Picture({
  name: 'image',
  ext: 'jpg',
  imgClass: '',
  width: '',
  height: '',
  alt: '',
  lazy: true,
  role: 'presentation',
  avif: true,
})
`),

  h3('png or gif files'),

  Pre(`
Picture({
  name: 'image',
  ext: 'png', // alternative: 'gif',
})
  `),

  p('renders'),

  Pre(`
<picture class="Picture">
  <source type="image/avif" srcset="/image.avif">
  <source type="image/webp" srcset="/image.webp">
  <img loading="lazy" alt="" role="presentation" src="/image.jpg">
</picture>
  `),

  p('example:'),

  Picture({
    name: 'image',
    ext: 'png',
  }),

  h2('caveat'),
  p(
    'at the moment, webp and avif files have to be generated manually. we will automate this task sometime in the future.',
  ),

  h2({ id: 'source' }, 'source'),

  p([
    'the source for this page is in the ',
    Link({
      text: 'example directory',
      to: 'https://github.com/magic-modules/picture/tree/master/example',
    }),
    ' and gets built and published to github using ',
    Link({ text: '@magic', to: 'https://github.com/magic/core' }),
  ]),
]
