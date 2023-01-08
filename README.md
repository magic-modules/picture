## @magic-modules/picture

this is the [@magic-modules](https://github.com/magic-modules) Picture component.

wraps `<picture>` to load modern image formats with fallbacks to jpg|png|gif.

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

#### install:

```bash
npm install --save-exact @magic-modules/picture
```

#### usage:

##### Markdown:

```markdown
<Picture name="image" ext="jpg"></Picture>
```

##### Javascript:

below is the javascript usage with the default arguments

```javascript
export const View = () => {
  Picture({
    name: 'image', // required!
    ext: 'jpg',
    avif: true,
  })
}
```

#### changelog

##### 0.0.1

first release.

##### 0.0.2
* lazy is a boolean now.

##### 0.0.3 - unreleased

...

[npm-image]: https://img.shields.io/npm/v/@magic-modules/picture.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/picture
[travis-image]: https://img.shields.io/travis/com/magic-modules/picture/master
[travis-url]: https://travis-ci.com/magic-modules/picture
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/picture/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/picture/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/picture/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/picture
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/picture.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/picture.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/picture/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/picture
