"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_http = require("http");
var import_graphql_yoga = require("graphql-yoga");
var import_buildSchema = __toESM(require("./utils/buildSchema"));
async function main() {
  try {
    const PORT = 4e3;
    const schema = await (0, import_buildSchema.default)();
    const yoga = (0, import_graphql_yoga.createYoga)({ schema });
    const server = (0, import_http.createServer)(yoga);
    server.listen(PORT, () => {
      console.info("Server is running on http://localhost:4000/graphql");
    });
  } catch (error) {
    console.error("Error starting server", error);
  }
}
main();
