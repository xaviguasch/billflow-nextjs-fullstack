"use server";

const addInvoice = async (formData) => {
  console.log("hola from server action");

  const values = {};

  for (const [key, value] of formData.entries()) {
    values[key] = value;
  }

  console.log("Form Values:", values);
};

export default addInvoice;
