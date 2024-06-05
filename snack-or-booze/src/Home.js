import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

// Handles showing the home page with quantity of available snacks and drinks
function Home({ food }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </p>
          </CardTitle>
          <CardSubtitle>
            <h3>
              We've got {food.drinks.length} drinks and {food.snacks.length}{" "}
              snacks
            </h3>
          </CardSubtitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
