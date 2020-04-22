import { orders } from './orders';

describe('Orders reducers test', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = orders(undefined, {});
    expect(result).toEqual(expected)
  });

  it('should return an array of orders if the action type is SET_ORDERS', () => {
    const initialState = [];
    const expected = [{id: 1,
            name: "Pat",
            ingredients: [
                "beans",
                "lettuce",
                "carnitas",
                "queso fresco",
                "jalapeno"
            ]},
            { id: 2,
              name: "Sam",
              ingredients: [
                  "steak",
                  "pico de gallo",
                  "lettuce",
                  "carnitas",
                  "queso fresco",
                  "jalapeno"
              ]}];
      const action = {
        type: 'SET_ORDERS',
        orders: [{id: 1,
                name: "Pat",
                ingredients: [
                    "beans",
                    "lettuce",
                    "carnitas",
                    "queso fresco",
                    "jalapeno"
                ]},
                { id: 2,
                  name: "Sam",
                  ingredients: [
                      "steak",
                      "pico de gallo",
                      "lettuce",
                      "carnitas",
                      "queso fresco",
                      "jalapeno"
                  ]}]
      }
      const result = orders(initialState, action)
      expect(result).toEqual(expected)
  });

})
