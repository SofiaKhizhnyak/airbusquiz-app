import { db } from "../../firebase";
import { collection, addDoc, doc } from "firebase/firestore";
/* import {
  ata21q,
  ata26q,
  ata27q,
  ata28q,
  ata29q,
  ata32q,
  ata36q,
  ata52q,
} from "../data/atasData"; */
/* import { tips } from "../data/tipsData"; */

import {
  qData2,
  qData3,
  qData4,
  qData5,
  qData6,
  qData7,
  qData8,
  qData9,
  qData10,
  qData11,
  qData12,
  qData13,
  qData14,
  qData15,
  qData16,
  qData17,
  qData18,
  qData19,
} from "../data/qData";

/*   qData20,
  qData21,
  qData22,
  qData23,
  qData24,
  qData25,
  qData26,
  qData27,
  qData28,
  qData29, */

export const uploadData = async () => {
  try {
    console.log("Uploading qData...");

    // Define the dataset for qData with chapter names as subcollection names
    const datasets = [
      {
        collectionName: "questions", // The parent collection
        data: [
          { name: "AIRCON1", questions: qData2 },
          { name: "AIRCON2", questions: qData3 },
          { name: "AIRCON3", questions: qData4 },
          { name: "AIRCON4", questions: qData5 },
          { name: "AUTOFLIGHT", questions: qData6 },
          { name: "DOORS", questions: qData7 },
          { name: "PNEUMATICS", questions: qData8 },
          { name: "FUEL", questions: qData9 },
          { name: "ICE&RAIN", questions: qData10 },
          { name: "HYDRAULIC", questions: qData11 },
          { name: "APU", questions: qData12 },
          { name: "OXYGEN", questions: qData13 },
          { name: "EQUIPMENT", questions: qData14 },
          { name: "ENGINES1", questions: qData15 },
          { name: "ENGINES2", questions: qData16 },
          { name: "NAVIAGTION1", questions: qData17 },
          { name: "NAVIGATION2", questions: qData18 },
          { name: "FIRE", questions: qData19 },
        ],
      },
    ];
    ///TO UPLOAD LATER
    /*     { name: "FLIGHT CONTROLS 1", questions: qData20 },
          { name: "FLIGHT CONTROLS 2", questions: qData21 },
          { name: "INDICAT / RECORD 1", questions: qData22 },
          { name: "INDICAT / RECORD 2", questions: qData23 },
          { name: "ELECTRICAL 1", questions: qData24 },
          { name: "ELECTRICAL 2", questions: qData25 },
          { name: "COMMUNICATION 1", questions: qData26 },
          { name: "COMMUNICATION 2", questions: qData27 },
          { name: "LANDING GEAR 1", questions: qData28 },
          { name: "LANDING GEAR 2", questions: qData29 }, */

    // Upload data
    for (const dataset of datasets) {
      for (const chapter of dataset.data) {
        const docRef = await addDoc(collection(db, dataset.collectionName), {}); // Create parent document
        const subCollectionRef = collection(docRef, chapter.name); // Subcollection under the parent document

        for (const question of chapter.questions) {
          await addDoc(subCollectionRef, question); // Add questions to subcollection
        }

        console.log(
          `Uploaded subcollection: ${chapter.name} to /${dataset.collectionName}/${docRef.id}/${chapter.name}`
        );
      }
    }

    console.log("All qData uploaded successfully!");
  } catch (error) {
    console.log("Error uploading qData:", error);
  }
};

/* export const uploadData = async () => {
  try {
    console.log("Uploading data...");

    const datasets = [
        {
        collectionName: "atas", // The parent collection
        data: [
          { name: "ata21q", questions: ata21q },
          { name: "ata26q", questions: ata26q },
          { name: "ata27q", questions: ata27q },
          { name: "ata28q", questions: ata28q },
          { name: "ata29q", questions: ata29q },
          { name: "ata32q", questions: ata32q },
          { name: "ata36q", questions: ata36q },
          { name: "ata52q", questions: ata52q },
        ],
      }, 
     
    ];

    for (const dataset of datasets) {
      for (const questionType of dataset.data) {
        // Create the parent document inside the "atas" collection
        const docRef = await addDoc(collection(db, dataset.collectionName), {});

        // Create the subcollection under the newly created document
        const subCollectionRef = collection(docRef, questionType.name);

        for (const question of questionType.questions) {
          await addDoc(subCollectionRef, question);
        }

        console.log(
          `Uploaded ${questionType.name} to ${dataset.collectionName}/${questionType.name}`
        );
      }
    }

    console.log("All data uploaded successfully!");
  } catch (error) {
    console.log("Error uploading data:", error);
  }
}; */

/* export const uploadData = async () => {
  try {
    console.log("Uploading tips data...");

    const collectionName = "tips";

    const tipsCollectionRef = collection(db, collectionName);

    for (const tip of tips) {
      await addDoc(tipsCollectionRef, tip);

      console.log(`Uploaded tip with id: ${tip.id}`);
    }

    console.log("All tips data uploaded successfully!");
  } catch (error) {
    console.log("Error uploading data:", error);
  }
}; */
