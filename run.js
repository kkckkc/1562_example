import { createApplication, createModule, CONTEXT, MODULE_ID } from 'graphql-modules';
import { module, Test, Test2 } from './test';

const m = createModule(module);
const application = createApplication({ modules: [m] });
