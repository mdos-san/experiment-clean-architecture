import { StoragePort } from "application/types/ports";

const storage: Record<string, Record<string, string>> = {}

export const InMemoryStorageAdapter: StoragePort = {
    create: (collection, id, value) => {
        if (!storage[collection]) {
            storage[collection] = {};
        }

        storage[collection][id] = value;

        console.debug("[InMemoryStorageAdapter]: ", storage);
    }
}

