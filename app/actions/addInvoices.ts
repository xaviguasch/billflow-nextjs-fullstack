"use server";

import connectDB from "@/config/database";
import Invoice from "@/models/Invoice";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function formDataToObject(formData) {
  const object = {};

  // Iterate over each key-value pair in the FormData object
  formData.forEach((value, key) => {
    object[key] = value;
  });

  console.log("===========");
  console.log(object);
  console.log("===========");

  return object;
}

function transformToMongoDocument(inputObject) {
  let dateString = inputObject["invoice-date"];
  let [day, month, year] = dateString.split("/");
  const dateObj = new Date(+year, +month - 1, +day);

  console.log("===========");

  console.log(inputObject["invoice-date"]);
  console.log(dateObj);

  console.log(dateObj.getTime());

  console.log("===========");

  let paymentDueDate = new Date(
    dateObj.getTime() + inputObject["select-terms"] * 24 * 60 * 60 * 1000,
  );

  console.log("paymentDueDate:     ", paymentDueDate);

  const transformedDocument = {
    original_id: "NEW",
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

  return transformedDocument;
}

async function addToDatabase(document) {
  await connectDB();
  console.log("!!!!!!!!!!!");
  console.log(document);
  console.log("!!!!!!!!!!!");

  const newInvoice = new Invoice(document);

  await newInvoice.save();

  revalidatePath("/", "layout");

  // redirect("/");
}

async function addInvoice(formData) {
  console.log("hola from server action");

  const resultObj = formDataToObject(formData);

  const transformedDocument = transformToMongoDocument(resultObj);

  addToDatabase(transformedDocument);
}

export default addInvoice;
