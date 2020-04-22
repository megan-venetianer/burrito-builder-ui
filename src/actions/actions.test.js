import * as actions from '.';

describe ('Actions Tests', () => {
  it('should have a type of SET_ORDERS, and a correct payload of orders', () => {
    const order1 = {id: 1,
            name: "Pat",
            ingredients: [
                "beans",
                "lettuce",
                "carnitas",
                "queso fresco",
                "jalapeno"
            ]};
    const order2 = { id: 2,
            name: "Sam",
            ingredients: [
                "steak",
                "pico de gallo",
                "lettuce",
                "carnitas",
                "queso fresco",
                "jalapeno"
            ]};

    const expectedAction = {
      type: 'SET_ORDERS',
      orders: [order1, order2]
    }
    const result = actions.setOrders([order1, order2])

    expect(result).toEqual(expectedAction)
  });

  it('should have a type of ADD_ORDER, and a correct payload of order', () => {
    const order1 = {id: 1,
            name: "Pat",
            ingredients: [
                "beans",
                "lettuce",
                "carnitas",
                "queso fresco",
                "jalapeno"
            ]};

    const expectedAction = {
      type: 'ADD_ORDER',
      order: [order1]
    }

    const result = actions.addOrder([order1])

    expect(result).toEqual(expectedAction)
  })
})
