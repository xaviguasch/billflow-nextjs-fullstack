import Image from "next/image";
import InvoiceGroup from "./_components/InvoiceGroup";

import connectDB from "@/config/database";
import Invoice from "@/models/Invoice";

export const revalidate = 3600;

const HomePage = async () => {
  connectDB();

  const invoices = await Invoice.find({}).lean();

  console.log(invoices);
  console.log("test");

  return (
    <main className="px-6 py-8">
      <InvoiceGroup invoices={invoices} />
    </main>
  );
};

export default HomePage;
