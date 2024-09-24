"use server";

import connectDB from "@/config/database";
import Invoice from "@/models/Invoice";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// We're only gonna use this for aesthetic purposes, it'll take the place
// of the "original_id" in the database documents
function generateRandomId() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetters =
    letters.charAt(Math.floor(Math.random() * letters.length)) +
    letters.charAt(Math.floor(Math.random() * letters.length));

  const randomNumbers = Math.floor(1000 + Math.random() * 9000); // Ensures a 4-digit number

  return randomLetters + randomNumbers;
}

function formDataToObject(formData) {
  const object = {};

  // Iterate over each key-value pair in the FormData object
  formData.forEach((value, key) => {
    object[key] = value;
  });

  return object;
}

function transformToMongoDocument(inputObject) {
  let dateString = inputObject["invoice-date"];
  let [day, month, year] = dateString.split("/");
  const dateObj = new Date(+year, +month - 1, +day);

  let paymentDueDate = new Date(
    dateObj.getTime() + inputObject["select-terms"] * 24 * 60 * 60 * 1000,
  );

  console.log("paymentDueDate:     ", paymentDueDate);

  const transformedDocument = {
    original_id: generateRandomId(),
    paymentDue: paymentDueDate,
    paymentTerms: Number(inputObject["select-terms"]),
    clientName: inputObject["client-name"],
    clientEmail: inputObject["client-email"],

    clientAddress: {
      street: inputObject["client-street-address"],
      city: inputObject["client-city"],
      postCode: inputObject["client-post-code"],
      country: inputObject["client-country"],
    },
    description: inputObject["project-description"],
    senderAddress: {
      street: inputObject["sender-street-address"],
      city: inputObject["sender-city"],
      postCode: inputObject["sender-post-code"],
      country: inputObject["sender-country"],
    },
    status: "pending",
    items: [],
  };

  // Iterate through the keys to dynamically extract items
  Object.keys(inputObject).forEach((key) => {
    const match = key.match(/item-(name|qty|price)-input(\d+)/);
    if (match) {
      const [_, field, index] = match; // Extract the field type and index from the key
      const itemIndex = parseInt(index, 10) - 1; // Convert index to zero-based

      // Ensure the item exists in the array
      if (!transformedDocument.items[itemIndex]) {
        transformedDocument.items[itemIndex] = {};
      }

      // Add the corresponding field to the item
      switch (field) {
        case "name":
          transformedDocument.items[itemIndex].name = inputObject[key];
          break;
        case "qty":
          transformedDocument.items[itemIndex].quantity = parseInt(
            inputObject[key],
            10,
          );
          break;
        case "price":
          transformedDocument.items[itemIndex].price = parseFloat(
            inputObject[key],
          );
          break;
      }
    }
  });

  const totalAmount = transformedDocument.items.reduce((total, item) => {
    console.log(item);

    return total + item.quantity * item.price;
  }, 0);

  transformedDocument.total = totalAmount;

  return transformedDocument;
}

async function addToDatabase(document) {
  await connectDB();

  const newInvoice = new Invoice(document);

  await newInvoice.save();
}

async function addInvoice(formData) {
  console.log("hola from server action");
  console.log("====================");
  console.log(formData);
  console.log("====================");

  const resultObj = formDataToObject(formData);

  const transformedDocument = transformToMongoDocument(resultObj);

  console.log("!!!!!!!!!!!");

  console.log(transformedDocument);

  console.log("!!!!!!!!!!!");

  addToDatabase(transformedDocument);

  revalidatePath("/", "layout");

  redirect("/");
}

export default addInvoice;
