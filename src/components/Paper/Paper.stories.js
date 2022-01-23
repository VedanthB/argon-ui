import React from "react";
import { Paper } from "./Paper";

export default {
  title: "Ar UI/Paper",
  component: Paper,
  argTypes: {
    variant: {
      description: "To make the paper outlined",
      table: {
        type: {
          summary: "eg. variant: outlined",
        },
      },
    },
    shadow: {
      description: "To add box shadow to the paper",
      table: {
        type: {
          summary: "eg. shadow: 5",
        },
      },
      control: {
        type: "number",
      },
    },
    square: {
      description: "To remove border radius from card",
      table: {
        type: {
          summary: "eg. square: false",
        },
      },
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <Paper {...args} />;

export const Outlined = Template.bind({});

Outlined.args = {
  children: <div>hello ar ui</div>,
  variant: "outlined",
  shadow: 4,
  square: false,
};

export const Shadow = Template.bind({});

Shadow.args = {
  children: <div>hello ar ui</div>,
  shadow: 4,
  square: true,
};
