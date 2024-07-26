import Image from "next/image";
import InvoiceGroup from "./_components/InvoiceGroup";

const HomePage = async () => {
  return (
    <main className="px-6 py-8">
      <InvoiceGroup />
    </main>
  );
};

export default HomePage;
