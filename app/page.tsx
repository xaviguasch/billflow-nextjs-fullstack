import Image from "next/image";
import InvoiceGroup from "./_components/InvoiceGroup";

async function fetchInvoices() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/invoices`, {
      method: "GET",
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export const revalidate = 3600;

const HomePage = async () => {
  const invoices = await fetchInvoices();

  return (
    <main className="px-6 py-8">
      <InvoiceGroup invoices={invoices} />
    </main>
  );
};

export default HomePage;
