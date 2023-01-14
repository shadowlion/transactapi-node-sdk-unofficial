import { getOffering } from "./endpoints/getOffering";
import { GetOfferingResponse } from "./endpoints/getOffering/types";

export class TransactApiClient {
  constructor(
    private sandbox: boolean,
    private clientId: string,
    private developerApiKey: string
  ) {}

  async getOffering({
    offeringId,
  }: {
    offeringId: string;
  }): Promise<GetOfferingResponse> {
    return await getOffering({
      sandbox: this.sandbox,
      clientId: this.clientId,
      developerApiKey: this.developerApiKey,
      offeringId,
    });
  }
}
