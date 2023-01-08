export const View = state => {
  CHECK_PROPS(state, propTypes, 'Picture')

  const {
    ext = 'jpg',
    imgClass = '',
    width,
    height,
    alt = '',
    loading = 'lazy',
    role = 'presentation',
    avif = true,
  } = state

  let { name } = state

  const props = {}

  if (!state.class) {
    props.class = 'Picture'
  } else {
    props.class = state.class

    if (!props.class.includes('Picture')) {
      props.class = `Picture ${props.class}`
    }
  }

  return picture(props, [
    avif &&
      source({
        type: 'image/avif',
        srcset: `${name}.avif`,
      }),
    source({
      type: 'image/webp',
      srcset: `${name}.webp`,
    }),

    img({
      class: imgClass,
      width,
      height,
      loading,
      alt,
      role,
      src: `${name}.${ext}`,
    }),
  ])
}

export const propTypes = {
  Picture: [
    { key: 'name', type: 'string', required: true },
    { key: 'ext', type: 'string', oneOf: ['jpg', 'png', 'gif', 'jpeg'] },
    { key: 'imgClass', type: 'string' },
    { key: 'width', type: ['number', 'string'] },
    { key: 'height', type: ['number', 'string'] },
    { key: 'alt', type: 'string' },
    { key: 'loading', oneOf: ['lazy'] },
    { key: 'role', oneOf: ['presentation'] },
    { key: 'avif', type: 'boolean' },
  ],
}
