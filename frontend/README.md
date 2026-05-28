# Yendou – SWE Take-Home Assignment

A TypeScript React counter app built with Vite and Chakra UI.

## Features

- **Counter component** — displays the current count with a `+1` button
- **Global state** — managed via `CounterContext` + `CounterProvider`
- **`useCounter()` hook** — exposes `count` and `increment()` to any component
- **Custom toast** — pixel-perfect match to the Figma spec, shown on every increment

## Stack

- [Vite](https://vitejs.dev/) + React 18
- TypeScript
- [Chakra UI v3](https://www.chakra-ui.com/) (Toaster, theming)
- Syne (display font) · Inter (toast text)

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Project Structure

```
src/
├── context/
│   └── CounterContext.tsx   # CounterContext + CounterProvider
├── hooks/
│   └── useCounter.ts        # useCounter() custom hook
├── components/
│   ├── Counter.tsx          # Counter UI + toast rendering
│   └── toaster.tsx          # Chakra UI Toaster setup
├── theme/
│   └── theme.ts             # Chakra UI v3 system config
├── App.tsx                  # Root — wires providers + Toaster
└── main.tsx                 # Entry point
```
