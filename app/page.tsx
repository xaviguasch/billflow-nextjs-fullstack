import Image from "next/image";
import InvoiceGroup from "./_components/InvoiceGroup";

async function fetchInvoices() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/invoices`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const HomePage = async () => {
  const invoices = await fetchInvoices();

  console.log(invoices);

  return (
    <main className="px-6 py-8">
      <InvoiceGroup />
    </main>
  );
};

export default HomePage;
