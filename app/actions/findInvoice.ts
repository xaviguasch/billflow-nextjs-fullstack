"use server";

import connectDB from "@/config/database";

import Invoice from "@/models/Invoice";

function convertToPlainObject(obj) {
  const plainObj = {};
  for (let key in obj) {
    if (obj[key] instanceof Date) {
      plainObj[key] = obj[key].toISOString();
    } else if (obj[key] instanceof Object && "_bsontype" in obj[key]) {
      plainObj[key] = obj[key].toString();
    } else if (Array.isArray(obj[key])) {
      plainObj[key] = obj[key].map((item) =>
        item instanceof Object ? convertToPlainObject(item) : item,
      );
    } else if (obj[key] instanceof Object) {
      plainObj[key] = convertToPlainObject(obj[key]);
    } else {
      plainObj[key] = obj[key];
    }
  }

  return plainObj;
}

function findInvoiceById(obj) {
  const plainObj = {};
  for (let key in obj) {
    if (obj[key] instanceof Date) {
      plainObj[key] = obj[key].toISOString();
    } else if (obj[key] instanceof Object && "_bsontype" in obj[key]) {
      plainObj[key] = obj[key].toString();
    } else if (Array.isArray(obj[key])) {
      plainObj[key] = obj[key].map((item) =>
        item instanceof Object ? convertToPlainObject(item) : item,
      );
    } else if (obj[key] instanceof Object) {
      plainObj[key] = convertToPlainObject(obj[key]);
    } else {
      plainObj[key] = obj[key];
    }
  }

  return plainObj;
}

async function findInvoice(id) {
  try {
    await connectDB();
    const invoice = await Invoice.findOne({ _id: id });
    const plainInvoice = invoice
      ? convertToPlainObject(invoice.toObject())
      : null;
    console.log("Plain invoice object:", plainInvoice);
    return plainInvoice;
  } catch (error) {
    console.error("Error finding document:", error);
    return null;
  }
}

export default findInvoice;
