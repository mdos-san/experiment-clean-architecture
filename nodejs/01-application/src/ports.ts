let adapters: Ports = {} as Ports;

export const setAdapters = (newAdapters: Ports) => adapters = newAdapters;

export const getAdapters = () => adapters;

export interface Ports {
  storage: StoragePort;
  server: ServerPort;
}

export interface StoragePort {
  create: (collection: string, id: string, value: string) => void;
}

export interface ServerPort {
  start: () => void;
}
