import calculator from "../../src/calculator";
import { MathBody } from "../../src/validator.js";
import { faker } from '@faker-js/faker';

describe("calculator tests", () => {

  it("should work", async () => {
    expect(true).toBe(true);
  });

  it("should sum two numbers", async () => {
      const n1 = faker.number.int()
      const n2 = faker.number.int()
      const sum = calculator.sum(n1,n2)

    expect(sum).toBe(n1+n2);
  });

  it("should subtract two numbers", async () => {
    const n1 = faker.number.int()
    const n2 = faker.number.int()
    const subtract = calculator.sub(n1,n2)

  expect(subtract).toBe(n1-n2);
  });

  it("should multiply two numbers", async () => {
    const n1 = faker.number.int()
    const n2 = faker.number.int()
    const multiply = calculator.mul(n1,n2)

  expect(multiply).toBe(n1*n2);
  });

  it("should divide two numbers", async () => {
    const n1 = faker.number.int()
    const n2 = faker.number.int()
    const divide = calculator.div(n1,n2)

  expect(divide).toBe(n1/n2);
  });

  it("should return 0 when diving by zero", async () => {
    const n1 = 0
    const n2 = faker.number.int()
    const divide = calculator.div(n1,n2)

  expect(divide).toBe(0);
  });
  
})