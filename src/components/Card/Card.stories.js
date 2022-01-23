import React from "react";
import { Button } from "../Button/Button";
import { Card } from "./Card";

export default {
  title: "Ar UI/Card",
  component: Card,
};

export const SimpleCard = () => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        width: "17.5rem",
        height: "16rem",
      }}
    >
      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          minHeight: "10rem",
        }}
      >
        <Card.Subtitle
          style={{ padding: "0.5rem", margin: "0", color: "grey" }}
        >
          Word of the day
        </Card.Subtitle>
        <Card.Title
          style={{ padding: "0.5rem", margin: "0", fontSize: "1.5rem" }}
        >
          be.nev.o.lent
        </Card.Title>
        <Card.Subtitle
          style={{ padding: "0.5rem", margin: "0", color: "grey" }}
        >
          adjective
        </Card.Subtitle>
        <Card.Text style={{ padding: "0.5rem", margin: "0" }}>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Card.Text>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100%",
          padding: "0.5rem",
        }}
      >
        <Button
          style={{
            margin: "0",
          }}
          kind="normal"
        >
          Learn More
        </Button>
      </div>
    </Card>
  );
};
