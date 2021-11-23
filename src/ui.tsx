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
import TokenCell from './components/TokenCell';

function Plugin() {
  return (
    <Container>
      <VerticalSpace space="small" />
      <SectionHeader label="Token Data" />
      <VerticalSpace space="small" />
      <div className={styles.tokenContainer}>
        <TokenCell name="Ethereum" />
        <TokenCell name="Ethereum" />
        <TokenCell name="Ethereum" />
        <TokenCell name="Ethereum" />
      </div>
      <VerticalSpace space="large" />
      <Button secondary fullWidth onClick={() => console.log("click")}>
        Use custom wallet data
      </Button>
      <VerticalSpace space="large" />
      <SectionHeader label="Actions" />
      <div className={styles.actions}>
        <ActionRow label="Get gas price (current)" />
        <ActionRow label="Generate wallet address"/>
        <ActionRow label="Generate transaction hash"/>
      </div>
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
