export const getOrders = async () => {
  let response = await fetch('http://localhost:3001/api/v1/orders')
      let data = await response.json()
      return data
}

export const submitOrder = (name, ingredients) => {
  return fetch('http://localhost:3001/api/v1/orders',
{
  headers: {
    "Content-Type": "application/json"
  },
  method: "POST",
  body: JSON.stringify(
    {name: name, ingredients: ingredients}
    )
  })
}
