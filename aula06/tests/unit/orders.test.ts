import { faker } from "@faker-js/faker";
import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";



describe("Order Service Tests", () => {
  it("should create an order", async () => {
    const orderInput: OrderInput = {
      client: faker.person.fullName(),
      description: faker.commerce.productDescription(),
    }

    const protocol = faker.number.int();
    const status = "Em preparação";

    jest
    .spyOn(orderRepository, "create").mockImplementationOnce((): any => {
      return {
        protocol,
        status
      }
    });
    const order = await createOrder(orderInput)
    expect(order.protocol).toEqual(protocol);
    expect(order.status).toEqual(status);
  });

  it("should return an order based on the protocol", async () => {
    const protocol = "12345";
    jest
    .spyOn(orderRepository, "getByProtocol")
    .mockImplementationOnce((): any => {
      return {
        protocol,
        status: "Em preparação"
      }
    });

    const order = await getOrderByProtocol(protocol);
    expect(orderRepository.getByProtocol)
    expect(order).toEqual({
      protocol,
      status: "Em preparação"
    });
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    const protocol = "0";
    jest
    .spyOn(orderRepository, "getByProtocol")
    .mockImplementationOnce((): any => {  });

    const order = await getOrderByProtocol(protocol);
    expect(order).toEqual({
      protocol,
      status: "INVALID"
    })
  });

});