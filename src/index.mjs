export const View = state => {
  CHECK_PROPS(state, propTypes, 'Picture')

  const {
    ext = 'jpg',
    imgClass = '',
    width,
    height,
    alt = '',
    role,
    lazy = true,
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

  const imgProps = {
    class: imgClass,
    width,
    height,
    loading: lazy && 'lazy',
    alt,
    role: role ? role : !alt && 'presentation',
    src: `${name}.${ext}`,
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

    img(imgProps),
  ])
}

export const propTypes = {
  Picture: [
    { key: 'name', type: 'string', required: true },
    { key: 'ext', type: 'string', oneOf: ['jpg', 'png', 'gif', 'jpeg'], default: 'jpg' },
    { key: 'imgClass', type: 'string' },
    { key: 'width', type: ['number', 'string'] },
    { key: 'height', type: ['number', 'string'] },
    { key: 'alt', type: 'string' },
    { key: 'lazy', type: 'boolean' },
    { key: 'role', type: 'string' },
    { key: 'avif', type: 'boolean' },
  ],
}
