export type GetOfferingRequest = {
  sandbox: boolean;
  clientId: string;
  developerApiKey: string;
  offeringId: string;
};

type OfferingDetail = {
  issuerId: string;
  offeringId: string;
  issueName: string;
  issueType: string;
  targetAmount: string;
  minAmount: string;
  maxAmount: string;
  unitPrice: string;
  totalShares: string;
  remainingShares: string;
  startDate: string;
  endDate: string;
  offeringStatus: string;
  offeringText: string;
  stampingText: null;
};

export type GetOfferingResponse = {
  statusCode: string;
  statusDesc: string;
  offeringDetails: OfferingDetail[];
};
