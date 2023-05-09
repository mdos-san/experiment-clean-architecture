import { ExpressServerAdapterFactory, InMemoryStorageAdapter } from "adapter";
import { ApplicationLayerFactory } from "application";

function main() {
    const application = ApplicationLayerFactory()

    const adapters = {
        storage: InMemoryStorageAdapter,
        server: ExpressServerAdapterFactory(application)
    };
    application.setAdapters(adapters)

    application.start();
}

main();
