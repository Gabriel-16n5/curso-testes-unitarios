import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "../../src/protocols-generator";

jest.mock('uuid', () => {
  return {
    v4: () => {return 'protocol'}
  }
})

describe("protocol test", () => {
  it("mocked protocol test", async () => {
    const name = faker.person.firstName();
    const lastName = faker.person.lastName();
    const sapo = generateProtocolForPacient(name, lastName, false)
    console.log(sapo)
    expect(sapo.protocol).toBe('protocol');
  });
});