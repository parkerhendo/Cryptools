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

const TokenCell = ({ imgPath, name = "Ethereum" }: { imgPath?: string; name: string }) => {
  return (
    <div className={styles.tokenCell}>
      <img className={styles.tokenLogo} src={imgPath} alt="Token logo" />
      <h3 className={styles.tokenName}>{name}</h3>
    </div>
  );
};

export default TokenCell;
