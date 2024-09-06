"use server";

import connectDB from "@/config/database";
import Invoice from "@/models/Invoice";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function markInvoiceAsPaid(invoiceId) {
  console.log("Marking invoice as paid");

  try {
    await connectDB();

    const invoice = await Invoice.findById(invoiceId);

    if (!invoice) throw new Error("Invoice not found");

    // Update only the status field
    const result = await Invoice.updateOne(
      { _id: invoiceId },
      { $set: { status: "paid" } },
    );

    console.log("Update result:", result);

    if (result.modifiedCount === 0) {
      throw new Error("Invoice was not updated");
    }

    console.log("Invoice marked as paid successfully");

    revalidatePath("/", "layout");
  } catch (error) {
    console.error("Detailed error in markInvoiceAsPaid:", error);
    throw error; // Throw the original error for debugging
  }
}

export default markInvoiceAsPaid;
