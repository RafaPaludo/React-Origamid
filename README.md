## This is a repository for studies about how React works.

## See oficial documentation at: https://react.dev/learn

## Necessary packages to create basic aplication:
* [React](https://unpkg.com/react@18/umd/react.development.js) - the lib itself
* [React DOM](https://unpkg.com/react-dom@18/umd/react-dom.development.js) - the lib that will create HTML DOM
* Transpiler: [Babel](https://babeljs.io/repl), SWC, [ESBuild](https://esbuild.github.io/) - translate JSX to JS
* Bundler: [ESBuild](https://esbuild.github.io/), [Rollup](https://rollupjs.org/), [Turbopack](https://turbo.build/pack), [Webpack](https://webpack.js.org/) - compiles, minifies files to enhace performance

## [Vite](https://vitejs.dev/)
Is a modern way to create React aplications. It installs all tools that are necessary to work with React. Making thing easy to create a aplication structure.
~~~
  npm create vite@latest .
  npm install
~~~

## Min Structure Folder
- node_modules
- public
- src
  - App.jsx
  - main.jsx
- index.html
- package.json
- package-lock.json
- vite.config.json


## Conventional Commits Patterns
https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657