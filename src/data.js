import { dateFormatter } from "./utils/utils";

const dashBoardData = {
  recordsTotal: 12,
  recordsFiltered: 12,
  data: [
    {
      number: 10002737,
      externalReferenceNumber: "3986567",
      productName: "Refinance",
      externalClientName: "CanLend Financial Services",
      signingAddress: {
        streetName: "450 King Street",
        streetDirection: "",
        city: "Vancouver",
        postalZip: "V6B 1Y2",
        provinceState: "BC",
        country: "CA",
      },
      appointmentDate: "2024-07-11T10:00:00",
      signingRequestedBy: "2024-07-30T00:00:00",
      numberOfDaysTillClosingDue: -120,
      daysOverdue: 120,
      agent: "John Doe",
      status: "Delivered",
      userAssignedDateTime: "2024-07-20T09:15:23.456",
      rush: true,
      signingParties: [
        {
          firstName: "Alex",
          middleName: "James",
          lastName: "Brown",
          email: "alex.brown@email.com",
          homePhoneNumber: "(222) 222-2222",
          workPhoneNumber: "(555) 555-5555",
          mobilePhoneNumber: "",
          isContact: true,
        },
      ],
      isDocumentPrinted: true,
      isBorrowerContacted: true,
      hasNotes: false,
      isDocumentVerified: true,
    },
    {
      number: 10002738,
      externalReferenceNumber: "3986568",
      productName: "Refinance",
      externalClientName: "PrimeLending Canada",
      signingAddress: {
        streetName: "700 Bay Street",
        streetDirection: "",
        city: "Ottawa",
        postalZip: "K1N 9E9",
        provinceState: "ON",
        country: "CA",
      },
      appointmentDate: "2024-07-12T14:30:00",
      signingRequestedBy: "2024-07-31T00:00:00",
      numberOfDaysTillClosingDue: -100,
      daysOverdue: 100,
      agent: "Sarah Smith",
      status: "In Progress",
      userAssignedDateTime: "2024-07-21T13:45:56.789",
      rush: false,
      signingParties: [
        {
          firstName: "Michael",
          middleName: "",
          lastName: "Johnson",
          email: "michael.johnson@email.com",
          homePhoneNumber: "(444) 444-4444",
          workPhoneNumber: "",
          mobilePhoneNumber: "(666) 666-6666",
          isContact: true,
        },
      ],
      isDocumentPrinted: false,
      isBorrowerContacted: false,
      hasNotes: true,
      isDocumentVerified: false,
    },
    {
      number: 10002739,
      externalReferenceNumber: "3986569",
      productName: "Refinance",
      externalClientName: "HomeLoan Solutions",
      signingAddress: {
        streetName: "250 Donald Street",
        streetDirection: "",
        city: "Montreal",
        postalZip: "H3Z 2Y7",
        provinceState: "QC",
        country: "CA",
      },
      appointmentDate: "2024-07-13T09:30:00",
      signingRequestedBy: "2024-08-01T00:00:00",
      numberOfDaysTillClosingDue: -90,
      daysOverdue: 90,
      agent: "David Lee",
      status: "Courier en route",
      userAssignedDateTime: "2024-07-22T07:20:45.678",
      rush: true,
      signingParties: [
        {
          firstName: "Emily",
          middleName: "Anna",
          lastName: "Williams",
          email: "emily.williams@email.com",
          homePhoneNumber: "(555) 555-5555",
          workPhoneNumber: "(777) 777-7777",
          mobilePhoneNumber: "",
          isContact: true,
        },
      ],
      isDocumentPrinted: true,
      isBorrowerContacted: true,
      hasNotes: false,
      isDocumentVerified: true,
    },
    {
      number: 10002740,
      externalReferenceNumber: "3986570",
      productName: "Refinance",
      externalClientName: "Canadian Mortgage Group",
      signingAddress: {
        streetName: "670 St. Catherine Street",
        streetDirection: "",
        city: "Calgary",
        postalZip: "T2P 0H3",
        provinceState: "AB",
        country: "CA",
      },
      appointmentDate: "2024-07-14T11:00:00",
      signingRequestedBy: "2024-08-02T00:00:00",
      numberOfDaysTillClosingDue: -110,
      daysOverdue: 110,
      agent: "Emma Watson",
      status: "Printed",
      userAssignedDateTime: "2024-07-23T14:15:24.321",
      rush: false,
      signingParties: [
        {
          firstName: "Daniel",
          middleName: "",
          lastName: "Martin",
          email: "daniel.martin@email.com",
          homePhoneNumber: "(333) 333-3333",
          workPhoneNumber: "",
          mobilePhoneNumber: "(999) 999-9999",
          isContact: true,
        },
      ],
      isDocumentPrinted: false,
      isBorrowerContacted: false,
      hasNotes: true,
      isDocumentVerified: false,
    },
    {
      number: 10002741,
      externalReferenceNumber: "3986571",
      productName: "Refinance",
      externalClientName: "Mortgage Plus Canada",
      signingAddress: {
        streetName: "800 Queen Street E",
        streetDirection: "",
        city: "Hamilton",
        postalZip: "L8P 1Y3",
        provinceState: "ON",
        country: "CA",
      },
      appointmentDate: "2024-07-15T13:00:00",
      signingRequestedBy: "2024-08-03T00:00:00",
      numberOfDaysTillClosingDue: -105,
      daysOverdue: 105,
      agent: "Michael Green",
      status: "Courier Confirmed",
      userAssignedDateTime: "2024-07-24T08:45:56.765",
      rush: true,
      signingParties: [
        {
          firstName: "Olivia",
          middleName: "Isabella",
          lastName: "Taylor",
          email: "olivia.taylor@email.com",
          homePhoneNumber: "(222) 222-2222",
          workPhoneNumber: "(444) 444-4444",
          mobilePhoneNumber: "",
          isContact: true,
        },
      ],
      isDocumentPrinted: true,
      isBorrowerContacted: true,
      hasNotes: false,
      isDocumentVerified: true,
    },
    {
      number: 10002742,
      externalReferenceNumber: "3986572",
      productName: "Refinance",
      externalClientName: "Home finance Canada",
      signingAddress: {
        streetName: "310 Huron Street",
        streetDirection: "",
        city: "London",
        postalZip: "N6A 1B4",
        provinceState: "ON",
        country: "CA",
      },
      appointmentDate: "2024-07-16T16:30:00",
      signingRequestedBy: "2024-08-04T00:00:00",
      numberOfDaysTillClosingDue: -120,
      daysOverdue: 120,
      agent: "Sophia Baker",
      status: "Completed",
      userAssignedDateTime: "2024-07-25T11:30:45.654",
      rush: false,
      signingParties: [
        {
          firstName: "Liam",
          middleName: "",
          lastName: "Clark",
          email: "liam.clark@email.com",
          homePhoneNumber: "(555) 555-5555",
          workPhoneNumber: "",
          mobilePhoneNumber: "(888) 888-8888",
          isContact: true,
        },
      ],
      isDocumentPrinted: false,
      isBorrowerContacted: false,
      hasNotes: true,
      isDocumentVerified: false,
    },
    {
      number: 10002743,
      externalReferenceNumber: "3986573",
      productName: "Refinance",
      externalClientName: "Easy Loan Solutions",
      signingAddress: {
        streetName: "560 College Street",
        streetDirection: "",
        city: "Edmonton",
        postalZip: "T6G 1H2",
        provinceState: "AB",
        country: "CA",
      },
      appointmentDate: "2024-07-17T09:15:00",
      signingRequestedBy: "2024-08-05T00:00:00",
      numberOfDaysTillClosingDue: -115,
      daysOverdue: 115,
      agent: "Noah White",
      status: "In Process",
      userAssignedDateTime: "2024-07-26T13:45:23.432",
      rush: true,
      signingParties: [
        {
          firstName: "Ava",
          middleName: "Rachel",
          lastName: "Martinez",
          email: "ava.martinez@email.com",
          homePhoneNumber: "(111) 111-1111",
          workPhoneNumber: "(333) 333-3333",
          mobilePhoneNumber: "",
          isContact: true,
        },
      ],
      isDocumentPrinted: true,
      isBorrowerContacted: true,
      hasNotes: false,
      isDocumentVerified: true,
    },
    {
      number: 10002744,
      externalReferenceNumber: "3986574",
      productName: "Refinance",
      externalClientName: "Secure Finance Canada",
      signingAddress: {
        streetName: "720 Bloor Street West",
        streetDirection: "",
        city: "Toronto",
        postalZip: "M6G 1K9",
        provinceState: "ON",
        country: "CA",
      },
      appointmentDate: "2024-07-18T14:30:00",
      signingRequestedBy: "2024-08-06T00:00:00",
      numberOfDaysTillClosingDue: -108,
      daysOverdue: 108,
      agent: "Chloe Turner",
      status: "Awaiting Signature",
      userAssignedDateTime: "2024-07-27T07:20:45.654",
      rush: false,
      signingParties: [
        {
          firstName: "James",
          middleName: "",
          lastName: "Harris",
          email: "james.harris@email.com",
          homePhoneNumber: "(444) 444-4444",
          workPhoneNumber: "",
          mobilePhoneNumber: "(777) 777-7777",
          isContact: true,
        },
      ],
      isDocumentPrinted: false,
      isBorrowerContacted: false,
      hasNotes: true,
      isDocumentVerified: false,
    },
    {
      number: 10002745,
      externalReferenceNumber: "3986575",
      productName: "Refinance",
      externalClientName: "Fast Finance Solutions",
      signingAddress: {
        streetName: "280 Regent Street",
        streetDirection: "",
        city: "Quebec City",
        postalZip: "G1R 2S8",
        provinceState: "QC",
        country: "CA",
      },
      appointmentDate: "2024-07-19T10:30:00",
      signingRequestedBy: "2024-08-07T00:00:00",
      numberOfDaysTillClosingDue: -118,
      daysOverdue: 118,
      agent: "Liam Scott",
      status: "Processing",
      userAssignedDateTime: "2024-07-28T08:45:56.765",
      rush: true,
      signingParties: [
        {
          firstName: "Amelia",
          middleName: "Grace",
          lastName: "Adams",
          email: "amelia.adams@email.com",
          homePhoneNumber: "(222) 222-2222",
          workPhoneNumber: "(666) 666-6666",
          mobilePhoneNumber: "",
          isContact: true,
        },
      ],
      isDocumentPrinted: true,
      isBorrowerContacted: true,
      hasNotes: false,
      isDocumentVerified: true,
    },
    {
      number: 10002746,
      externalReferenceNumber: "3986576",
      productName: "Refinance",
      externalClientName: "QuickMortgage Canada",
      signingAddress: {
        streetName: "950 Yonge Street",
        streetDirection: "",
        city: "Barrie",
        postalZip: "L4M 1E3",
        provinceState: "ON",
        country: "CA",
      },
      appointmentDate: "2024-07-20T15:45:00",
      signingRequestedBy: "2024-08-08T00:00:00",
      numberOfDaysTillClosingDue: -125,
      daysOverdue: 125,
      agent: "Noah White",
      status: "Courier En Route",
      userAssignedDateTime: "2024-07-29T11:11:11.111",
      rush: false,
      signingParties: [
        {
          firstName: "Noah",
          middleName: "",
          lastName: "Walker",
          email: "noah.walker@email.com",
          homePhoneNumber: "(333) 333-3333",
          workPhoneNumber: "",
          mobilePhoneNumber: "(999) 999-9999",
          isContact: true,
        },
      ],
      isDocumentPrinted: false,
      isBorrowerContacted: false,
      hasNotes: true,
      isDocumentVerified: false,
    },
    {
      number: 10002747,
      externalReferenceNumber: "3986577",
      productName: "Refinance",
      externalClientName: "Smart Finance Group",
      signingAddress: {
        streetName: "610 Main Street",
        streetDirection: "",
        city: "Winnipeg",
        postalZip: "R3C 0B1",
        provinceState: "MB",
        country: "CA",
      },
      appointmentDate: "2024-07-21T12:30:00",
      signingRequestedBy: "2024-08-09T00:00:00",
      numberOfDaysTillClosingDue: -122,
      daysOverdue: 122,
      agent: "Olivia Green",
      status: "Courier Delivered",
      userAssignedDateTime: "2024-07-30T05:55:54.455",
      rush: true,
      signingParties: [
        {
          firstName: "Benjamin",
          middleName: "Jack",
          lastName: "Song",
          email: "benjamin.song@email.com",
          homePhoneNumber: "(444) 444-4444",
          workPhoneNumber: "(888) 888-8888",
          mobilePhoneNumber: "",
          isContact: true,
        },
      ],
      isDocumentPrinted: true,
      isBorrowerContacted: true,
      hasNotes: false,
      isDocumentVerified: true,
    },
    {
      number: 10002748,
      externalReferenceNumber: "3986578",
      productName: "Refinance",
      externalClientName: "Mortgage Master Canada",
      signingAddress: {
        streetName: "750 Spadina Avenue",
        streetDirection: "",
        city: "Toronto",
        postalZip: "M5V 2L4",
        provinceState: "ON",
        country: "CA",
      },
      appointmentDate: "2024-07-22T17:00:00",
      signingRequestedBy: "2024-08-10T00:00:00",
      numberOfDaysTillClosingDue: -115,
      daysOverdue: 115,
      agent: "Ethan Smith",
      status: "Courier Arrived",
      userAssignedDateTime: "2024-08-01T03:45:23.432",
      rush: false,
      signingParties: [
        {
          firstName: "Chloe",
          middleName: "",
          lastName: "Lewis",
          email: "chloe.lewis@email.com",
          homePhoneNumber: "(555) 555-5555",
          workPhoneNumber: "",
          mobilePhoneNumber: "(777) 777-7777",
          isContact: true,
        },
      ],
      isDocumentPrinted: false,
      isBorrowerContacted: false,
      hasNotes: true,
      isDocumentVerified: false,
    },
  ],
};

export function getAddressLineOne(address) {
  let addressLineOne = "";
  if (address?.streetNumber) {
    addressLineOne += address.streetNumber;
  }

  if (address?.streetName) {
    addressLineOne += addressLineOne
      ? ` ${address.streetName}`
      : address.streetName;
  }

  if (address?.streetDirection) {
    addressLineOne += addressLineOne
      ? ` ${address.streetDirection}`
      : address.streetDirection;
  }

  return addressLineOne;
}

export function getAddressLineTwo(address) {
  let addressLineTwo = "";
  if (address?.city) {
    addressLineTwo += address.city;
  }

  if (address?.province) {
    addressLineTwo += addressLineTwo
      ? `, ${address.province}`
      : address.province;
  }

  if (address?.postalZip) {
    addressLineTwo += addressLineTwo
      ? `, ${address.postalZip}`
      : address.postalZip;
  }

  return addressLineTwo;
}

const data = dashBoardData.data.map((item) => ({
  orderId: item.number,
  fileNumber: item.externalReferenceNumber,
  productName: item.productName,
  lenderName: item.externalClientName,
  addressLineOne: getAddressLineOne(item.signingAddress),
  addressLineTwo: getAddressLineTwo(item.signingAddress),
  signingDate: dateFormatter(item.signingRequestedBy),
  clientName: `${item.signingParties[0]?.firstName} ${item.signingParties[0]?.lastName}`,
}));

export async function getDashboardData() {
  const resp = new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  });

  return await resp.json();
}

export async function getOrder(orderId) {
  const order = dashBoardData.data.find((order) => order.number === orderId);
  const resp = new Response(JSON.stringify(order), {
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  });

  return await resp.json();
}
