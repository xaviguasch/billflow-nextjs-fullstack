import connectDB from "@/config/database";

// GET /api/invoices
export const GET = async (request) => {
  try {
    await connectDB();

    return Response.json("hello world!!!");
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
