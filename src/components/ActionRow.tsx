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

const ActionRow = ({ label = "Action Row" }: { label: string }) => {
  return (
    <div className={styles.actionRow}>
      <h3 className={styles.actionLabel}>{label}</h3>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13 10.0979L13.765 10.576L21.765 15.576L22.4434 16L21.765 16.424L13.765 21.424L13 21.9021V21V11V10.0979ZM14 11.9021V20.0979L20.5566 16L14 11.9021Z"
          fill="black"
          fill-opacity="0.8"
        />
      </svg>
    </div>
  );
};

export default ActionRow;
