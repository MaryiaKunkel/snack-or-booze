import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

// Handles showing the home page with quantity of available snacks and drinks
function Home({ snacksAmount, drinksAmount }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <CardSubtitle>
            <h3>
              We've got {drinksAmount} drinks and {snacksAmount} snacks
            </h3>
          </CardSubtitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
