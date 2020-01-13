---
to: kata/<%= name %>/__test__/<%= name %>.test.ts
---
import {<%= functionName % =>} from '../<%= name %>'

describe("Kata-<%= name %>", () => {
  test("Should ", () => {
      expect(<%= functionName %>()).toEqual()})
  })