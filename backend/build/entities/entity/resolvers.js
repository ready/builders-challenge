"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var resolvers_exports = {};
__export(resolvers_exports, {
  default: () => resolvers_default
});
module.exports = __toCommonJS(resolvers_exports);
var import_generateResolver = __toESM(require("../../utils/generateResolver"));
const entities = {};
let index = 0;
var resolvers_default = {
  Query: {
    getEntity: (0, import_generateResolver.default)(({
      args: {
        id
      }
    }) => {
      if (id in entities) {
        return entities[id];
      } else {
        throw new Error("No such entity with specified id");
      }
    })
  },
  Mutation: {
    createEntity: (0, import_generateResolver.default)(({
      args: {
        entity
      }
    }) => {
      const id = index += 1;
      entities[id] = {
        ...entity,
        id,
        createdAt: new Date()
      };
      return entities[id];
    }),
    updateEntity: (0, import_generateResolver.default)(({
      args: {
        id,
        entity
      }
    }) => {
      if (id in entities) {
        entities[id] = { ...entities[id], ...entity };
        return entities[id];
      } else {
        throw new Error("No such entity with specified id");
      }
    }),
    deleteEntity: (0, import_generateResolver.default)(({
      args: {
        id
      }
    }) => {
      if (id in entities) {
        delete entities[id];
        return true;
      } else {
        throw new Error("No such entity with specified id");
      }
    })
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
