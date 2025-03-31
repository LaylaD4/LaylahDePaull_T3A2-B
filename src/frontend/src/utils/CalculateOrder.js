// CalculateOrder utility is a class used to calculate the total price of an order, eg when used in the cart or checkout page
export default class CalculateOrder {
    // Pass in items, an array of products that includes price & quantity
    constructor(items) {
      this.items = items;
    }
  
    // Function to calculate & return the total cost of all items in the cart
    getTotal() {
      let subtotal = 0;
  
      // Use for loop to go through each item & add (price * quantity) to get the order amount (subtotal)
      for (let item of this.items) {
        subtotal += item.price * item.quantity;
      }
  
      // Return the total with only 2 decimal places
      return subtotal.toFixed(2);
    }
  }
  