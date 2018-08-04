<h1>Remixml path-component filter</h1>

[![NPM version](http://img.shields.io/npm/v/remixml-pathencode.svg?style=flat)](https://npmjs.org/package/remixml-pathencode)
[![Downloads](https://img.shields.io/npm/dm/remixml-pathencode.svg?style=flat)](https://npmjs.org/package/remixml-pathencode)
[![Rate on Openbase](https://badges.openbase.io/js/rating/remixml-pathencode.svg)](https://openbase.io/js/remixml-pathencode?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

Performs a lossy transformation
into a format that can be inserted into a URI path component.

Automatically registers itself as a Remixml filter using the name `path`.

## Basic usage

```html
<set var="_.foo">SÖme text with a diacritic.</set>
Then insert /this/is/a/sanitised/&_.foo:path;/path using the path filter.
```

## Requirements

It runs inside any webbrowser or NodeJS environment.

## Reference documentation

- `RemixmlPathencode.encode(string)`<br />
  Performs a lossy transformation of `string`
  into a format that can be inserted into a URI path component:
  - Cast to lowercase.
  - Replace diacritics by their ASCII equivalent.
  - Replace all strings of non-alphanumeric characters with single dashes.
  - Strip dashes from start and end.

## References

- Used by the high performance Javascript templating engine
  [Remixml](http://remixml.org/).
- Compatible with the
  fastest [lockandload AMD-loader](https://www.npmjs.com/package/lockandload).

Card-carrying member of the `zerodeps` movement.
