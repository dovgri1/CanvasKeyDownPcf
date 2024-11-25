import * as React from "react";
import { IInputs } from "./generated/ManifestTypes";

interface Props {
  context: ComponentFramework.Context<IInputs>;
  setOutput: (value: string) => void;
}

export const KeyDownDiv: React.FC<Props> = (props) => {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (props.context.parameters.ignore.raw) return;
      const events: string[] = props.context?.parameters?.keyboardShortcuts?.raw?.split(";") || [];
      const string = convertKeyDownToString(event);
      if (events.includes(string)) {
        event.preventDefault();
        props.setOutput(string);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <section />;
};

const convertKeyDownToString = (event: KeyboardEvent) => {
  const keys = [];

  if (event.ctrlKey) keys.push("ctrl");
  if (event.shiftKey) keys.push("shift");
  if (event.altKey) keys.push("alt");
  if (event.metaKey) keys.push("meta");

  // Use event.key for the actual key pressed
  keys.push(event.key.toLowerCase());

  return keys.join("+");
};
