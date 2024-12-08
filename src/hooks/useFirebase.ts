import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseApp } from "../firebase/firebaseConfig";
import { Vegs } from "../types/Vegs.types";

// DB
const firestore = firebaseApp.firestore;

// 野菜データを取得
export const useFetch = (collectionName: string) => {
  const [vegs, setVegs] = useState<Vegs[]>([]);

  useEffect(() => {
    const docRef = collection(firestore, collectionName);
    const q = query(docRef, orderBy("name", "asc"));

    const unsub = onSnapshot(q, (snapshot) => {
      let results: any = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setVegs(results);
    });
    return () => unsub();
  }, [collectionName]);

  return { vegs };
};

// 在庫を更新
export const useUpdate = () => {
  // クリックで個数を更新する関数
  const updateByClick = async (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    fieldNameA: string,
    fieldNameB: string,
    stockA: number,
    stockB: number,
    name: string | undefined
  ) => {
    e.preventDefault();
    // エラーfalseセット
    setError(false);
    // DBを呼び出す
    const firestore = firebaseApp.firestore;

    // フィールド名＆plus or minusをsplitで分割
    const [targetFieldName, sign] = (e.target as HTMLButtonElement).id.split(
      "_"
    );
    // フィールド名
    const updateFieldName =
      fieldNameA === targetFieldName ? fieldNameA : fieldNameB;
    // 値
    const updateValue = updateFieldName === fieldNameA ? stockA : stockB;

    // 0判定
    const numAfterUpdated = sign === "plus" ? updateValue + 1 : updateValue - 1;
    if (numAfterUpdated === 0) {
      const isUpdated = window.confirm(
        "在庫数を0に更新いたしますがよろしいですか？"
      );
      if (!isUpdated) return;
    }

    // 更新する内容
    let updateObj = {
      [updateFieldName]: sign === "plus" ? updateValue + 1 : updateValue - 1,
      // その他変更する必要のあるフィールド
      updatedAt: serverTimestamp(),
    };
    try {
      // ドキュメントidを取得するため
      const vegsRef = collection(firestore, "Vegs");
      const q = query(vegsRef, where("name", "==", name));

      // 更新するドキュメントを取得してくる
      const querySnapshot = await getDocs(q);

      // 取得してきたドキュメントのidをもとに、新しくドキュメントのstockフィールドを更新する
      querySnapshot.forEach(async (data) => {
        const vegRef = doc(firestore, "Vegs", data.id);

        await updateDoc(vegRef, updateObj).catch((err) => {
          setError(err);
        });
      });
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  // グラム
  const updateGram = async (
    e: React.FormEvent<HTMLFormElement>,
    stock: number | undefined,
    name: string | undefined
  ) => {
    const isUpdated = window.confirm(
      "入力した内容で更新いたしますがよろしいですか？"
    );
    if (!isUpdated) return;
    e.preventDefault();
    // 更新するフィールド名
    const fieldName = e.currentTarget.classList[1];

    // 更新する内容
    let updateObj = {
      [fieldName]: stock,
      updatedAt: serverTimestamp(),
    };

    // DBを呼び出す
    const firestore = firebaseApp.firestore;
    try {
      // ドキュメントidを取得するため
      const vegsRef = collection(firestore, "Vegs");
      const q = query(vegsRef, where("name", "==", name));

      // 更新するドキュメントを取得してくる
      const querySnapshot = await getDocs(q);

      // 取得してきたドキュメントのidをもとに、新しくドキュメントのstockフィールドを更新する
      querySnapshot.forEach(async (data) => {
        const vegRef = doc(firestore, "Vegs", data.id);

        await updateDoc(vegRef, updateObj).catch((err) => {
          alert("個数の変更に失敗しました。");
        });
      });
    } catch (err) {
      console.log(err);
      alert("個数の変更に失敗しました。");
    }
  };

  // 値段の変更
  const updatePrice = async (
    e: React.FormEvent<HTMLFormElement>,
    stock: number | undefined,
    name: string | undefined
  ) => {
    const isUpdated = window.confirm(
      "入力した内容で更新いたしますがよろしいですか？"
    );
    if (!isUpdated) return;
    e.preventDefault();
    // 更新するフィールド名
    const fieldName = e.currentTarget.classList[1];

    // 更新する内容
    let updateObj = {
      [fieldName]: stock,
      updatedAt: serverTimestamp(),
    };

    // DBを呼び出す
    const firestore = firebaseApp.firestore;
    try {
      // ドキュメントidを取得するため
      const vegsRef = collection(firestore, "Vegs");
      const q = query(vegsRef, where("name", "==", name));

      // 更新するドキュメントを取得してくる
      const querySnapshot = await getDocs(q);

      // 取得してきたドキュメントのidをもとに、新しくドキュメントのstockフィールドを更新する
      querySnapshot.forEach(async (data) => {
        const vegRef = doc(firestore, "Vegs", data.id);

        await updateDoc(vegRef, updateObj).catch((err) => {
          alert("個数の変更に失敗しました。");
        });
      });
    } catch (err) {
      console.log(err);
      alert("個数の変更に失敗しました。");
    }
  };

  return { updateByClick, updateGram, updatePrice };
};
