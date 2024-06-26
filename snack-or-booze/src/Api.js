import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  // get food items from the database
  static async getFood(food) {
    const result = await axios.get(`${BASE_API_URL}/${food}`);
    return result.data;
  }
  // add new food items to the database
  static async addFood(food, newItem) {
    const result = await axios.post(`${BASE_API_URL}/${food}`, newItem);
    return result.data;
  }
}

export default SnackOrBoozeApi;
