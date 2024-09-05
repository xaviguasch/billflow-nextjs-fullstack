import InvoiceDisplay from "@/app/_components/InvoiceDisplay";
import removeInvoice from "@/app/actions/removeInvoice";
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

const InvoicePage = async ({ params }) => {
  console.log(params);

  const invoice = await findInvoice(params.invoiceId);

  console.log(invoice);

  if (!invoice) {
    // PENDING FINISHING STYLING
    return <h2>NO INVOICE!!!! pending</h2>;
  }

  return <InvoiceDisplay invoice={invoice} />;
};

export default InvoicePage;
