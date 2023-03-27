<h3 align="center">
  <a href="https://gcanti.github.io/fp-ts/">
    <img src="./docs/fp-ts-logo.png">
  </a>
</h3>

<p align="center">
Functional programming in TypeScript
</p>


# Sponsor

<table>
  <tr>
    <td align="center" vertical-align="center">
      <a href="https://unsplash.com/" >
        <img src="https://font-cdn.photoroom.com/media/api-logo.png" width="120px;" alt="Unsplash" />
      </a>
    </td>
    <td align="center" vertical-align="center">
      <b>PhotoRoom Remove Background API</b>
      <br />
      <a href="https://photoroom.com/apis/remove-background?utm_source=rembg&utm_medium=github_webpage&utm_campaign=sponsor">https://photoroom.com/api</a>
      <br />
      <p width="200px">
        Fast and accurate background remover API<br/>
      </p>
    </td>
  </tr>
 
</table>

# Installation

To install the stable version:

```
npm install fp-ts
```

Make sure to always have a single version of `fp-ts` installed in your project. Multiple versions are known to cause `tsc` to hang during compilation. You can check the versions currently installed using `npm ls fp-ts` (make sure there's a single version and all the others are marked as `deduped`).

## TypeScript compatibility

**Strictness** – This library is conceived, tested and is supposed to be consumed by TypeScript with the `strict` flag turned on.

| `fp-ts` version | required `typescript` version |
| --------------- | ----------------------------- |
| 2.0.x+          | 3.5+                          |
| 1.15.x+         | 3.1+                          |
| <= 1.14.4       | 2.8+ (\*)                     |

(\*) If you are running `< typescript@3.0.1` you have to polyfill the `unknown` type. You can use [unknown-ts](https://github.com/gcanti/unknown-ts) as a polyfill.

# Documentation

**Disclaimer**. Teaching functional programming is out of scope of this project, so the documentation assumes you already know what FP is.

- [Docs](https://gcanti.github.io/fp-ts)
- [Learning Resources](https://gcanti.github.io/fp-ts/learning-resources/)
- [Ecosystem](https://gcanti.github.io/fp-ts/ecosystem/)
- API Reference
  - [version 2.x (current)](https://gcanti.github.io/fp-ts/modules/)
  - [version 1.x](https://github.com/gcanti/fp-ts/tree/1.x/docs/modules/)

# Help

If you need help with `fp-ts` check out:

- this [Discord server](https://discord.gg/HVWmBBXM8A)
- the `#fp-ts` channel on [FP slack](https://fpslack.com/).

# Development

- [Code conventions](https://gcanti.github.io/fp-ts/guides/code-conventions)

# License

The MIT License (MIT)
