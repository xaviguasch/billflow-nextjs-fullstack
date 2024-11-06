import Image from "next/image";
import InvoiceGroup from "./_components/InvoiceGroup";

import connectDB from "@/config/database";
import Invoice from "@/models/Invoice";
// With the use of 'searchParams' the page becomes dynamic
// so we don't need revalidate anymore
// export const revalidate = 3600;

const HomePage = async ({ searchParams }) => {
  await connectDB();

  const invoices = await Invoice.find({}).lean();

  const filter = searchParams?.status ?? "all";

  return (
    <main className="md:flex md:justify-center">
      <InvoiceGroup invoices={invoices} filter={filter} />
    </main>
  );
};

export default HomePage;
