import { Timestamp } from "firebase/firestore";

export type Vegs = {
  // A品
  // 袋
  aBagQty: number;
  aBagStock: number;
  aBagPrice: number;
  // 箱
  aBoxQty: number;
  aBoxStock: number;
  aBoxPrice: number;
  // g
  aGramStock: number;
  aGramPrice: number;
  // B品
  // 袋
  bBagQty: number;
  bBagStock: number;
  bBagPrice: number;
  // 箱
  bBoxQty: number;
  bBoxStock: number;
  bBoxPrice: number;
  // g
  bGramStock: number;
  bGramPrice: number;
  // 他のフィールド
  alt?: string;
  createdAt?: Timestamp;
  desc?: string;
  id: string;
  image?: string;
  name?: string;
  updatedAt: Timestamp;
};
