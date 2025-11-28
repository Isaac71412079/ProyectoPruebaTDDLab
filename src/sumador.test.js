/* eslint-disable quotes */
import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3,4)).toEqual(7);
  });
});


