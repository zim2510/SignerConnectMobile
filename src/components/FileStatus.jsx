import { getAddressLineOne, getAddressLineTwo, getOrder } from "../data";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { dateTimeFormatter } from "../utils/utils";

export default function FileStatus() {
  const { orderId } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrder(parseInt(orderId)),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const fileStatusProps = [
    {
      key: "externalReferenceNumber",
      name: "File Reference #",
      value: "N/A",
    },
    { key: "orderType", name: "Order Type", value: "New Signing" },
    { key: "externalClientName", name: "Lender", value: "N/A" },
    { key: "productName", name: "Product Type", value: "N/A" },
    {
      key: "signingRequestedBy",
      name: "Closing Date",
      value: "N/A",
      type: "date",
    },
    { key: "number", name: "Order Number", value: "N/A" },
    { key: "agent", name: "Signer", value: "N/A" },
    {
      key: "appointmentDate",
      name: "Appointment Date",
      value: "N/A",
      type: "date",
    },
    {
      key: "specialInstructions",
      name: "Special Instructions",
      value: "N/A",
    },
  ];

  const signingDetailsProps = [
    {
      key: "address",
      name: "Address",
      value: `${getAddressLineOne(data.signingAddress)}, ${getAddressLineTwo(
        data.signingAddress
      )}`,
      widthClass: "w-full",
    },
  ];
  data.signingParties.forEach((party, index) => {
    signingDetailsProps.push({
      key: `party{index}.name`,
      name: `Client #${index + 1}`,
      value:
        `${party.firstName} ${party.middleName} ${party.lastName}`.replaceAll(
          "  ",
          " "
        ),
    });

    signingDetailsProps.push({
      key: `party${index}.contact`,
      name: `Contact`,
      value:
        party.mobilePhoneNumber ??
        party.homePhoneNumber ??
        party.workPhoneNumber,
    });

    signingDetailsProps.push({
      key: `party${index}.email`,
      name: `Email`,
      value: party.email,
      widthClass: "w-full md:w-1/3",
    });
  });

  const documentsProps = [
    {
      key: "document1",
      documentName: `${orderId} - Virtual Signing Package.pdf`,
      documentType: "Unsigned Document",
      uploadedBy: "FNF Signing API",
      uploadedAt: dateTimeFormatter("2024-11-12T15:12:35.927"),
    },
  ];

  const notesProps = [
    {
      key: "note1",
      note: "This is a sample note where some very important details are being added and must not be ignored.",
      addedBy: "FNF Signing API",
      addedAt: dateTimeFormatter("2024-11-12T15:12:35.927"),
    },
  ];

  return (
    <div className="flex flex-col mt-3 items-center w-full">
      <Card title="File Status" data={data} props={fileStatusProps} />
      <Card title="Signing Details" data={data} props={signingDetailsProps} />
      <Card title="Documents" cardType="document" props={documentsProps}></Card>
      <Card title="Notes" cardType="note" props={notesProps}></Card>
    </div>
  );
}

export function Card({ cardType, title, data, props }) {
  let content;
  console.log(props);

  if (props.length == 0) {
    content = <p className="italic">No Data</p>;
  } else if (cardType == "document") {
    content = props.map((prop) => (
      <div key={prop.key} className="w-full py-1">
        <p>{prop.documentName}</p>
        <p>Document Type: {prop.documentType}</p>
        <p>Uploaded By: {prop.uploadedBy}</p>
        <p>Uploaded At: {prop.uploadedAt}</p>
      </div>
    ));
  } else if (cardType == "note") {
    content = props.map((prop) => (
      <div key={prop.key} className="w-full py-1">
        <p>{prop.addedBy}</p>
        <p className="text-sm italic text-[#CCC]">{prop.addedAt}</p>
        <p className="mt-2">{prop.note}</p>
      </div>
    ));
  } else {
    content = props.map((prop) => (
      <div
        key={prop.key}
        className={`${prop.widthClass ?? "w-1/2 md:w-1/3"} py-1`}
      >
        <p className="text-sm text-[#CCC] font-bold">{prop.name}</p>
        <p>{data[prop.key] ?? prop.value}</p>
      </div>
    ));
  }

  return (
    <div className="w-full md:w-3/4 p-4">
      <div className="bg-white shadow-md rounded-md p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="w-full flex flex-row flex-wrap justify-between mt-4">
          {content}
        </div>
      </div>
    </div>
  );
}
