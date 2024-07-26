import { Schema, model, models } from "mongoose";

const InvoiceSchema = new Schema(
  {
    original_id: {
      type: String,
      required: [true, "ID is required"],
    },
    createdAt: {
      type: Date,
    },
    paymentDue: {
      type: Date,
      required: [true, "Payment due date is required"],
    },
    paymentTerms: {
      type: Number,
      required: [true, "Payment terms are required"],
    },
    clientName: {
      type: String,
      required: [true, "Client name is required"],
    },
    clientEmail: {
      type: String,
      required: [true, "Client email is required"],
    },
    status: {
      type: String,
      required: [true, "Status is required"],
    },
    senderAddress: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      postCode: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    clientAddress: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      postCode: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    items: [
      {
        name: {
          type: String,
        },
        quantity: {
          type: Number,
        },
        price: {
          type: Number,
        },
      },
    ],
    total: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

const Invoice = models.Invoice || model("Invoice", InvoiceSchema);

export default Invoice;
