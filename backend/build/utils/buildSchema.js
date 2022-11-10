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
var buildSchema_exports = {};
__export(buildSchema_exports, {
  default: () => buildSchema
});
module.exports = __toCommonJS(buildSchema_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_schema = require("@graphql-tools/schema");
var import_stitch = require("@graphql-tools/stitch");
async function buildSchema() {
  try {
    const entitiesPath = import_path.default.join(__dirname, "../entities");
    const entityDirs = await import_fs.default.promises.readdir(entitiesPath);
    const subschemas = [];
    for (const entityDirname of entityDirs) {
      const typeDefsPath = import_path.default.join(entitiesPath, entityDirname, "typeDefs.js");
      const resolversPath = import_path.default.join(entitiesPath, entityDirname, "resolvers.js");
      const typeDefs = await import(typeDefsPath);
      const resolvers = await import(resolversPath);
      subschemas.push({
        schema: (0, import_schema.makeExecutableSchema)({
          typeDefs: typeDefs.default.default,
          resolvers: resolvers.default.default
        })
      });
    }
    return (0, import_stitch.stitchSchemas)({ subschemas });
  } catch (error) {
    console.error("Error building schemas", error);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
