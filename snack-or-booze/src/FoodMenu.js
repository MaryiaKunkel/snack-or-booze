import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SnackOrBoozeApi from "./Api";

import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";

// Handles adding new item form, adding the item to the database.
function FoodMenu({ food, addItem }) {
  const { foodType } = useParams();
  const items = food[foodType];

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [serve, setServe] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      id: name.toLowerCase(),
      name: name,
      description: description,
      serve: serve,
    };
    await SnackOrBoozeApi.addFood(foodType, newItem);
    addItem(foodType, newItem);
    setName("");
    setDescription("");
    setRecipe("");
    setServe("");
    history.push(`/${foodType}`);
  };

  if (!items || items.length === 0) {
    return <p>No items found for this category.</p>;
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`/${foodType}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>

      <h3>Add your own drink</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormFeedback>Name is required</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormFeedback>Description is required</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="recipe">Recipe:</Label>
          <Input
            type="text"
            name="recipe"
            id="recipe"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
          <FormFeedback>Recipe is required</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="serve">Serve:</Label>
          <Input
            type="text"
            name="serve"
            id="serve"
            value={serve}
            onChange={(e) => setServe(e.target.value)}
          />
          <FormFeedback>Serve is required</FormFeedback>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </section>
  );
}

export default FoodMenu;
