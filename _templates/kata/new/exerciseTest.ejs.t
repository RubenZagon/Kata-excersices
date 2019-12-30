---
to: kata/<%= name %>/__test__/<%= name %>.test.ts
---
var _<%= name %> = require("../<%= name %>.ts");

describe("Kata-<%= name %>", () => {
  it("Should ", () => {
      expect(_<%= name %>.<%= functionName %>()).toEqual()})
  })