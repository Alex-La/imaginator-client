/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PORT
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}