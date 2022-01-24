import { Icon } from "../Icon/Icon";
import { Chip } from "./Chip";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Paper } from "../Paper/Paper";
import { useState } from "react";
import { Button } from "../Button/Button";

export default {
  title: "Ar UI/Chip",
  component: Chip,
};

const Template = (args) => <Chip {...args} />;

export const BasicChip = Template.bind({});

BasicChip.args = {
  kind: "outline",
  variant: "primary",
  children: "Chip",
};

export const FilledChip = Template.bind({});

FilledChip.args = {
  kind: "filled",
  variant: "info",
  children: "Chip",
  size: "sm",
};

export const FilledLightChip = Template.bind({});

FilledLightChip.args = {
  kind: "filled",
  variant: "light",
  children: "Chip",
  size: "md",
};

export const IconChip = () => {
  return (
    <Chip style={{ width: "fit-content" }} kind="outline" variant="secondary">
      Delete
      <Icon
        onClick={() => console.log("chip clicked")}
        style={{ marginLeft: "6px", fontSize: "16px" }}
        icon={faTimesCircle}
      />
    </Chip>
  );
};

export const ComplexChip = () => {
  const initState = [
    {
      label: "Angular",
      onClick: (label) =>
        setChipsList(chipsList.filter((chip) => chip.label !== label)),
    },
    {
      label: "jQuery",
      onClick: (label) =>
        setChipsList(chipsList.filter((chip) => chip.label !== label)),
    },
    {
      label: "Polymer",
      onClick: (label) =>
        setChipsList(chipsList.filter((chip) => chip.label !== label)),
    },
    {
      label: "React",
      onClick: (label) =>
        setChipsList(chipsList.filter((chip) => chip.label !== label)),
    },
    {
      label: "Vue.js",
      onClick: (label) =>
        setChipsList(chipsList.filter((chip) => chip.label !== label)),
    },
    {
      label: "Polymer",
      onClick: (label) =>
        setChipsList(chipsList.filter((chip) => chip.label !== label)),
    },
    {
      label: "React",
      onClick: (label) =>
        setChipsList(chipsList.filter((chip) => chip.label !== label)),
    },
    {
      label: "Vue.js",
      onClick: (label) =>
        setChipsList(chipsList.filter((chip) => chip.label !== label)),
    },
  ];

  let newChip = {
    label: "New chip",
    onClick: (label) =>
      setChipsList(chipsList.filter((chip) => chip.label !== label)),
  };
  const [chipsList, setChipsList] = useState(initState);
  return (
    <>
      <Paper
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "fit-content",
          width: "450px",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
        square
        shadow={4}
      >
        {chipsList.map((chip) => (
          <Chip
            key={chip.key}
            style={{ width: "fit-content" }}
            kind="outline"
            variant="dark"
          >
            {chip.label}
            <Icon
              onClick={() => chip.onClick(chip.label)}
              style={{ marginLeft: "6px", fontSize: "16px" }}
              icon={faTimesCircle}
            />
          </Chip>
        ))}
      </Paper>

      <Button
        onClick={() => setChipsList([chipsList, ...newChip])}
        kind="filled"
        size="md"
        square
        variant="light"
      >
        Add Chip
      </Button>
    </>
  );
};
