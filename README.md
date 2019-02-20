# @veobot/stylelint-config

> Veo Robotics Stylelint rules for all CSS / SCSS styles

---

[![npm version](https://badge.fury.io/js/%40veobot%2Fstylelint-config.svg)](https://badge.fury.io/js/%40veobot%2Fstylelint-config)

## Installation

Install the package and all of its peer dependencies:

```bash
$ npx install-peerdeps --dev @veobot/stylelint-config
```

Afterwards, create a `.stylelintrc` file in your root project folder and add the following:

```json
{
  "extends": "@veobot"
}
```

## Configuration

To override anything, simply add a `rules` property to your `.stylelintrc`
file and add new or existing rules to it with your preferred settings:

```json
{
  "extends": "@veobot",
  "rules": {
    "number-leading-zero": null
  }
}
```

## Testing

To run tests for this package, install the development dependencies with
`npm install` from this folder and then run `npm test`.

## License

MIT License. See LICENSE file for details.
