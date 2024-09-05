"use server";

import connectDB from "@/config/database";
import Invoice from "@/models/Invoice";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function removeInvoice(invoiceId) {
  console.log("hola from removeInvoice action");

  await connectDB();

  const invoice = await Invoice.findById(invoiceId);

  if (!invoice) throw new Error("Invoice not found");

  await invoice.deleteOne();

  revalidatePath("/", "layout");

  redirect("/");
}

export default removeInvoice;
