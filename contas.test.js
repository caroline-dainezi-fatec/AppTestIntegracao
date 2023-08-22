const contas = require("./contas");

test("Soma 2+5 esperado 7 como resultado", () => {
  expect(contas.soma(2, 5)).toBe(7);
});

test("Subtração 5-2 esperado 3 como resultado", () => {
  expect(contas.subtracao(5, 2)).toBe(3);
});

test("Multiplicação 2x5 esperado 10 como resultado", () => {
  expect(contas.multiplicao(2, 5)).toBe(10);
});

test("Divisão 4x2 esperado 2 como resultado", () => {
  expect(contas.divisao(4, 2)).toBe(2);
});