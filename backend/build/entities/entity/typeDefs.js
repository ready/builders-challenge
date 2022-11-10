"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var typeDefs_exports = {};
__export(typeDefs_exports, {
  default: () => typeDefs_default
});
module.exports = __toCommonJS(typeDefs_exports);
var typeDefs_default = `
  type Entity {
    id: ID!
    name: String!
    description: String
    createdAt: String!
  }  

  input EntityInput {
    name: String!
    description: String
  }

  type Query {
    getEntity(id: ID!): Entity 
  }
  
  type Mutation {
    createEntity(entity: EntityInput!): Entity!
    updateEntity(id: ID! entity: EntityInput): Entity!
    deleteEntity(id: ID!): Boolean!
  }
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
