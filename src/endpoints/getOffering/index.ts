import { GetOfferingRequest, GetOfferingResponse } from "./types";

export const getOffering = async ({
  sandbox,
  clientId,
  developerApiKey,
  offeringId,
}: GetOfferingRequest): Promise<GetOfferingResponse> => {
  const prefix = sandbox ? "api-sandboxdash" : "api";
  const url = `https://${prefix}.norcapsecurities.com/tapiv3/index.php/v3/getOffering`;
  const payload = {
    clientID: clientId,
    developerAPIKey: developerApiKey,
    offeringId,
  };
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = (await res.json()) as GetOfferingResponse;
  return data;
};
