import React from "react";
import { Input } from "./Input";

export default {
  title: "Ar UI/Input",
  component: Input,
  args: {
    label: "Name",
    value: "Argon Ui",
  },
};

const Template = (args) => <Input {...args} />;

export const SecondaryOutlinedMedium = Template.bind({});
SecondaryOutlinedMedium.args = {
  size: "medium",
  variant: "standard",
  color: "secondary",
};

export const OutlinedSmall = Template.bind({});
OutlinedSmall.args = {
  size: "small",
  variant: "outlined",
};

export const OutlinedMedium = Template.bind({});
OutlinedMedium.args = {
  size: "medium",
  variant: "outlined",
};

export const OutlinedLarge = Template.bind({});
OutlinedLarge.args = {
  size: "large",
  variant: "outlined",
};

export const FilledSmall = Template.bind({});
FilledSmall.args = {
  size: "small",
  variant: "standard",
};

export const FilledMedium = Template.bind({});
FilledMedium.args = {
  size: "medium",
  variant: "standard",
};

export const FilledLarge = Template.bind({});
FilledLarge.args = {
  size: "large",
  variant: "standard",
  color: "info",
};

export const PrimaryStandardSmall = Template.bind({});
PrimaryStandardSmall.args = {
  size: "small",
  variant: "standard",
  color: "primary",
};

export const WarningStandardSmall = Template.bind({});
WarningStandardSmall.args = {
  size: "small",
  variant: "standard",
  color: "danger",
};
