"use server";

function formDataToObject(formData) {
  const object = {};

  // Iterate over each key-value pair in the FormData object
  formData.forEach((value, key) => {
    object[key] = value;
  });

  return object;
}

function transformToMongoDocument(inputObject) {
  const transformedDocument = {
    client: {
      name: inputObject["client-name"],
      email: inputObject["client-email"],
      address: {
        street: inputObject["client-street-address"],
        country: inputObject["client-country"],
      },
    },
    projectDescription: inputObject["project-description"],
    address: {
      street: inputObject["street-address"],
      city: inputObject.city,
      postCode: inputObject["post-code"],
      country: inputObject.country,
    },
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

const addInvoice = async (formData) => {
  console.log("hola from server action");

  const resultObj = formDataToObject(formData);

  console.log("..................");
  console.log(resultObj);
  console.log("..................");

  const transformedDocument = transformToMongoDocument(resultObj);
  console.log("!!!!!!!!!!!");
  console.log(transformedDocument);
  console.log("!!!!!!!!!!!");
};

export default addInvoice;
