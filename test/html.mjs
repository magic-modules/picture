import { is } from '@magic/test'
import * as Picture from '../src/index.mjs'

const expectedHtml = ({
  name = 'image',
  ext = 'jpg',
  avif = true,
  role = 'presentation',
  alt = '',
  lazy = true,
  class: cl = '',
  imgClass = '',
}) =>
  `
<picture class="Picture${cl ? ` ${cl}` : ''}">
${avif ? `<source type="image/avif" srcset="${name}.avif"/>` : ''}
<source type="image/webp" srcset="${name}.webp"/>
<img${imgClass ? ` class="${imgClass}"` : ''}${
    lazy ? ` loading="lazy"` : ''
  } alt="${alt}"${role ? ` role="${role}"` : ''} src="${name}.${ext}"/>
</picture>
`
    .trim()
    .replace(/\n/gim, '')

const html = true

const tests = [
  { props: { name: 'image2' }, info: 'can output image2.jpg' },
  { props: { name: 'image', ext: 'png' }, info: 'can handle ext = png' },
  { props: { name: 'image', ext: 'gif' }, info: 'can handle ext = gif' },
  { props: { name: 'image', ext: 'jpeg' }, info: 'can handle ext = jpeg' },
  { props: { name: 'image', avif: false }, info: 'can handle avif = false' },
  { props: { name: 'image', class: 'Testing' }, info: 'can add classname to container' },
  { props: { name: 'image', imgClass: 'Testing' }, info: 'can add classname to img' },
  { props: { name: 'image', role: 'presentation' }, info: 'can use role: presentation' },
]

export default tests.map(({ props, info }) => ({
  fn: () => Picture.View(props),
  html,
  expect: expectedHtml(props),
  // leave here to easily test input/output
  // expect: t => console.log({ t, e: expectedHtml(props) }) || expectedHtml(props)===t,
  info,
}))
