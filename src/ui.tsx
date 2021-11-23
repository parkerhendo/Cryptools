import {
  Button,
  Container,
  Text,
  render,
  VerticalSpace,
} from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useCallback, useState } from "react";

import styles from "./styles.css";
import { InsertCodeHandler } from "./types";

import ActionRow from "./components/ActionRow";
import SectionHeader from './components/SectionHeader';

function Plugin() {
  return (
    <Container>
      <VerticalSpace space="small" />
      <SectionHeader label="Token Data" />
      <VerticalSpace space="small" />
      <div className={styles.container}>Ethereum</div>
      <Button secondary fullWidth onClick={() => console.log("click")}>
        Insert Code
      </Button>
      <VerticalSpace space="large" />
      <SectionHeader label="Actions" />
      <div className={styles.actions}>
        <ActionRow />
        <ActionRow />
        <ActionRow />
      </div>
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
