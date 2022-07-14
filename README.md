# Vite Tauri Template
This is a starter template for those who want to make a desktop application with web technologies. This template uses the below stack.

## Tauri
[Tauri](https://tauri.studio/) is a new modern technology to turn your web apps into a desktop app for multiple platforms (Windows, MacOS, Linux, android and ios soon). Tauri apps have very small file size and tiny memory consumption.

## vitesse-lite
[vitesse-lite](vhttps://github.com/antfu/vitesse-lit) Lightweight version of Vitesse

### Vite.js
[Vite.js](https://vitejs.dev/) is a new modern bundler for javascript which is blazing fast and includes many sensible defaults.

### Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 📦 [Components auto importing](./src/components)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript, of course

### Pre-packed

#### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

#### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

#### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

## Installation
- Ready your workspace according to tauri. [Tauri Getting Started](https://tauri.studio/v1/guides/getting-started/prerequisites)

  - **Note:** You only need to install global things such as rust and other os level packages. Any thing related to application itself is already installed and ready for you.

- Clone repository `git clone https://github.com/yooneskh/vite-tauri-template app-name`

- `yarn` or `npm i`

- Modify these files according to your app.
  - `index.html`
  - `package.json`
  - `public/favicon.ico`
  - `src/assets/logo.*`
  - `src-tauri/tauri.conf.json`

## Usage

- `yarn serve` launches vite and you can test and develop your app in the browser at `http://localhost:8080`.

- `yarn serve:native` launches vite and configures ynetwork to use tauri for api calls. Use this if you want to test your app in tauri dev mode.

- `yarn serve:tauri` launches tauri in dev mode and you can see your app in tauri window.

- `yarn build` builds web application and packages them with tauri in `src-tauri/target`

- `yarn build:web` only builds the web application and puts it in `./dist` directory. You should not normally want this. Difference of this web app with the one build with normal `yarn build` is that this one uses axios for network calls.

## License
Do whatever you want with it!
