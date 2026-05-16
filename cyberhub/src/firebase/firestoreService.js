import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

import { db } from "./firebaseConfig";

export async function createUserProfileIfMissing(user) {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      email: user.email,
      favorites: [],
      createdAt: new Date().toISOString(),
    });
  }
}

export async function getUserFavorites(userId) {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    return [];
  }

  return userSnap.data().favorites || [];
}

export async function addFavorite(userId, resourceId, email = "") {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      email,
      favorites: [resourceId],
      createdAt: new Date().toISOString(),
    });
    return;
  }

  await updateDoc(userRef, {
    favorites: arrayUnion(resourceId),
  });
}

export async function removeFavorite(userId, resourceId) {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    return;
  }

  await updateDoc(userRef, {
    favorites: arrayRemove(resourceId),
  });
}