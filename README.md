# Relay Receiver Example With Vite and React

This project demonstrates how to add [Relay
Receiver](https://github.com/relaycc/receiver) to a
[React](https://reactjs.org/) + [Vite](https://vitejs.dev/guide/) project.

# Details Specific to Vite

* Newer verions of Vite don't support `process.env`. See the [vite
  config](vite.config.ts) for the workaround.
* Newer versions of Vite don't support certain packages, such as `buffer`. To
  work around this issue, first `npm install --save buffer` then see lines 4-5
  in [main.tsx](src/main.tsx). See [this
  discussion](https://github.com/vitejs/vite/discussions/2785) on GitHub for
  more details.

