import 'reflect-metadata';
import gql from 'graphql-tag';
import { InjectionToken, Injectable, Inject, CONTEXT, MODULE_ID, Scope } from 'graphql-modules';

@Injectable()
export class Test2 {
  constructor() {
    console.log('*** INSTANTIATE Test2');
    console.log('--------------------------');
  }
}

@Injectable()
export class Test {
  constructor(@Inject(Test2) tst) {
    console.log('*** INSTANTIATE Test');
    console.log(tst);
    console.log('--------------------------');
  }
}

export const module = {
  id: __filename,
  dirname: __dirname,
  typeDefs: gql`
    type Query {
      q: MyType
    }

    type MyType {
      id: ID
    }
  `,
  providers: () => [
    Test2,
    Test
  ]
}
