"use strict";
/**
* @typedef {import('moleculer').Context} Context Moleculer's Context
*/


module.exports = { 
  name: "calculator",
  settings: {},
  dependencies: [],
  actions: {
    calculate: {
      rest: "GET /calculate",
      async handler(ctx) {
        const { a, b, sign } = ctx.params;

        const operations = {
          "+": (a, b) => parseInt(a) + parseInt(b),
          "-": (a, b) => parseInt(a) - parseInt(b),
          "*": (a, b) => parseInt(a) * parseInt(b),
          "/": (a, b) => parseInt(a) / parseInt(b),
        };

        if (sign in operations) {
          const result = operations[sign](a, b);
          return result.toString();
        } else {
          throw new Error("Invalid sign");
        }
      },
    },
  },
  events: {},
  methods: {},
  created() {},
  started() {},
  stopped() {},
};