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
          onClick={() => console.log("clicked")}
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

export const SimpleImageCard = () => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        width: "345px",
        height: "320px",
        overflow: "hidden",
      }}
    >
      <Card.Img width="345" height="140" src="https://picsum.photos/345/140" />
      <div
        style={{
          height: "180px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: " 1rem",
        }}
      >
        <Card.Title
          style={{
            fontSize: "24px",
            fontWeight: "400",
            margin: "0px",
            marginBottom: "24px",
          }}
        >
          Lizard
        </Card.Title>
        <Card.Text
          style={{
            margin: "0px",
          }}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Card.Text>
      </div>
    </Card>
  );
};
