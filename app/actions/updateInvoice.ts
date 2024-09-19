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
    _id: inputObject["_id"],
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
    const match = key.match(/item-(name|qty|price)(?:-input(\d+)|-([\w\d]+))/);
    if (match) {
      const [_, field, numericIndex, hashIndex] = match;
      const itemIndex = numericIndex
        ? parseInt(numericIndex, 10) - 1
        : hashIndex;

      // Ensure the item exists in the array or object
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

  // Convert items object to array if necessary
  transformedDocument.items = Object.values(transformedDocument.items);

  const totalAmount = transformedDocument.items.reduce((total, item) => {
    console.log(item);

    return total + item.quantity * item.price;
  }, 0);

  transformedDocument.total = totalAmount;

  return transformedDocument;
}

async function saveChangesToDatabase(document) {
  await connectDB(); // Assuming connectDB is a function that connects to the database
  try {
    const result = await Invoice.findByIdAndUpdate(document._id, document, {
      // Use document._id and document for update
      new: true,
    });
    if (!result) {
      throw new Error("Invoice not found");
    }
    console.log("Invoice updated successfully");
  } catch (error) {
    console.error("Error updating invoice:", error);
    throw error;
  }
}

async function updateInvoice(formData) {
  console.log("hola from server action");
  console.log("********************");
  console.log(formData);
  console.log("********************");

  const resultObj = formDataToObject(formData);
  console.log("RRRRRRRRRRRRRRR");
  console.log(resultObj);
  console.log("RRRRRRRRRRRRRRR");

  const transformedDocument = transformToMongoDocument(resultObj);

  console.log("!!!!!!!!!!!");
  console.log(transformedDocument);
  console.log("!!!!!!!!!!!");

  await saveChangesToDatabase(transformedDocument);

  revalidatePath("/");
  redirect("/");
}

export default updateInvoice;
