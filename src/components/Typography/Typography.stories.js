import { Typography } from "./Typography";

export default {
  name: "Ar UI/Typography",
  component: Typography,
  argTypes: {
    variant: {
      description: "specifies which HTML tag  to render",
      table: {
        type: {
          summary: "eg. variant: h1",
        },
      },
    },
    children: {
      description: "text node",
      table: {
        type: {
          summary: "This is some text",
        },
      },
    },
  },
};

const Template = (args) => <Typography {...args} />;

export const h1 = Template.bind({});
h1.args = {
  variant: "h1",
  children: "This is a h1 heading",
};

export const h2 = Template.bind({});
h2.args = {
  variant: "h2",
  children: "This is a h2 heading",
};

export const h3 = Template.bind({});
h3.args = {
  variant: "h3",
  children: "This is a h3 heading",
};

export const h4 = Template.bind({});
h4.args = {
  variant: "h4",
  children: "This is a h4 heading",
};

export const h5 = Template.bind({});
h5.args = {
  variant: "h5",
  children: "This is a h5 heading",
};

export const h6 = Template.bind({});
h6.args = {
  variant: "h6",
  children: "This is a h6 heading",
};

export const body1 = Template.bind({});
body1.args = {
  variant: "body1",
  children:
    "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam",
};
export const body2 = Template.bind({});

body2.args = {
  variant: "body2",
  children:
    "body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
};

export const subtitle1 = Template.bind({});
subtitle1.args = {
  variant: "subtitle1",
  children:
    "subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
};

export const subtitle2 = Template.bind({});
subtitle2.args = {
  variant: "subtitle2",
  children:
    "subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
};

export const buttonText = Template.bind({});
buttonText.args = {
  variant: "button-text",
  children: "Button text",
};

export const captionText = Template.bind({});
captionText.args = {
  variant: "caption-text",
  children: "This is a caption",
};

export const outlineText = Template.bind({});
outlineText.args = {
  variant: "overline-text",
  children: "overline text",
};
