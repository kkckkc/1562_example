"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.module = exports.Test = exports.Test2 = void 0;

require("reflect-metadata");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _graphqlModules = require("graphql-modules");

var _dec, _class, _dec2, _class2, _temp, _temp2;

let Test2 = (_dec = (0, _graphqlModules.Injectable)(), _dec(_class = class Test2 {
  constructor() {
    console.log('*** INSTANTIATE Test2');
    console.log('--------------------------');
  }

}) || _class);
exports.Test2 = Test2;
let Test = (_dec2 = (0, _graphqlModules.Injectable)(), _dec2(_class2 = (_temp2 = (_temp = class Test {
  constructor(tst) {
    console.log('*** INSTANTIATE Test');
    console.log(tst);
    console.log('--------------------------');
  }

}, _temp), _temp = (0, _graphqlModules.Inject)(Test2)(_temp, undefined, 0) || _temp, _temp2)) || _class2);
exports.Test = Test;
const _module = {
  id: __filename,
  dirname: __dirname,
  typeDefs: (0, _graphqlTag.default)`
    type Query {
      q: MyType
    }

    type MyType {
      id: ID
    }
  `,
  providers: () => [Test2, Test]
};
exports.module = _module;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Rlc3QuanMiXSwibmFtZXMiOlsiVGVzdDIiLCJjb25zdHJ1Y3RvciIsImNvbnNvbGUiLCJsb2ciLCJUZXN0IiwidHN0IiwibW9kdWxlIiwiaWQiLCJfX2ZpbGVuYW1lIiwiZGlybmFtZSIsIl9fZGlybmFtZSIsInR5cGVEZWZzIiwicHJvdmlkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztJQUdhQSxLLFdBRFosaUMsZ0JBQUQsTUFDYUEsS0FEYixDQUNtQjtBQUNqQkMsRUFBQUEsV0FBVyxHQUFHO0FBQ1pDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0FELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO0FBQ0Q7O0FBSmdCLEM7O0lBUU5DLEksWUFEWixpQyxxQ0FBRCxNQUNhQSxJQURiLENBQ2tCO0FBQ2hCSCxFQUFBQSxXQUFXLE1BQXFCO0FBQzlCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsR0FBWjtBQUNBSCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjtBQUNEOztBQUxlLEMsa0JBQ0gsNEJBQU9ILEtBQVAsQzs7QUFPUixNQUFNTSxPQUFNLEdBQUc7QUFDcEJDLEVBQUFBLEVBQUUsRUFBRUMsVUFEZ0I7QUFFcEJDLEVBQUFBLE9BQU8sRUFBRUMsU0FGVztBQUdwQkMsRUFBQUEsUUFBUSxFQUFFLHdCQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FYc0I7QUFZcEJDLEVBQUFBLFNBQVMsRUFBRSxNQUFNLENBQ2ZaLEtBRGUsRUFFZkksSUFGZTtBQVpHLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0YWJsZSwgSW5qZWN0LCBDT05URVhULCBNT0RVTEVfSUQsIFNjb3BlIH0gZnJvbSAnZ3JhcGhxbC1tb2R1bGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRlc3QyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJyoqKiBJTlNUQU5USUFURSBUZXN0MicpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZXN0IHtcbiAgY29uc3RydWN0b3IoQEluamVjdChUZXN0MikgdHN0KSB7XG4gICAgY29uc29sZS5sb2coJyoqKiBJTlNUQU5USUFURSBUZXN0Jyk7XG4gICAgY29uc29sZS5sb2codHN0KTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbW9kdWxlID0ge1xuICBpZDogX19maWxlbmFtZSxcbiAgZGlybmFtZTogX19kaXJuYW1lLFxuICB0eXBlRGVmczogZ3FsYFxuICAgIHR5cGUgUXVlcnkge1xuICAgICAgcTogTXlUeXBlXG4gICAgfVxuXG4gICAgdHlwZSBNeVR5cGUge1xuICAgICAgaWQ6IElEXG4gICAgfVxuICBgLFxuICBwcm92aWRlcnM6ICgpID0+IFtcbiAgICBUZXN0MixcbiAgICBUZXN0XG4gIF1cbn1cbiJdfQ==