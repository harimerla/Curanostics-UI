import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./FirebaseConfig";

// Initialize Firestore
const db = getFirestore(app);

const saveResponseToFirestore = async (response: Record<string, any>) => {
  try {
    // Ensure response is a valid object
    if (!response || typeof response !== "object") {
      throw new Error("Invalid response object provided.");
    }

    // Add response to Firestore
    const docRef = await addDoc(collection(db, "information"), response);
    console.log("Response successfully saved to Firestore with ID:", docRef.id);
  } catch (error) {
    console.error("Error saving response to Firestore:", error);
  }
};

export default saveResponseToFirestore;
