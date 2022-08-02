# todo

An Electron application with Vue

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

### Project Structure

The structure of this template is very similar to the structure of a monorepo.

```mermaid
flowchart TB;

packages/preload <-. IPC Messages .-> packages/main

subgraph packages/main
M[index.ts] --> EM[Electron Main Process Modules]
M --> N2[Node.js API]
end


subgraph packages/preload
P[index.ts] --> N[Node.js API]
P --> ED[External dependencies]
P --> ER[Electron Renderer Process Modules]
end


subgraph packages/renderer
R[index.html] --> W[Web API]
R --> BD[Bundled dependencies]
R --> F[Web Frameforks]
end

packages/renderer -- Call Exposed API --> P
```