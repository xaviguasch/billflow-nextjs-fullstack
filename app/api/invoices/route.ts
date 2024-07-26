import connectDB from "@/config/database";

import Invoice from "@/models/Invoice";

// GET /api/invoices
export const GET = async (request) => {
  try {
    await connectDB();

    const invoices = await Invoice.find({});

    return Response.json(invoices);
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
