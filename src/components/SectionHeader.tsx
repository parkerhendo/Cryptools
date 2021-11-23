import {
  Button,
  Container,
  Text,
  render,
  VerticalSpace,
} from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";

import styles from "../styles.css";

const ActionRow = ({ label = "Section Label" }: { label: string }) => {
  return (
    <div className={styles.sectionHeader}>
      <h1 className={styles.sectionLabel}>{label}</h1>
    </div>
  );
};

export default ActionRow;
