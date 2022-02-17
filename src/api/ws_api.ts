import { BaseAPI } from "./base_api";

import { ReqParams } from "../defs/loopring_defs";

import { SIG_FLAG, ReqMethod } from "../defs/loopring_enums";

import { LOOPRING_URLs } from "../defs/url_defs";
import { DelegateAPI } from "./delegate_api";
import { GlobalAPI } from "./global_api";
import { NFTAPI } from "./nft_api";
import { UserAPI } from "./user_api";
import { WalletAPI } from "./wallet_api";
import { WhitelistedUserAPI } from "./whitelisted_user_api";

export class WsAPI extends BaseAPI {
  /*
   * Get wsApiKey by access REST path "/v3/ws/key"
   */
  public async getWsKey() {
    const reqParams: ReqParams = {
      url: LOOPRING_URLs.GET_WS_KEY,
      method: ReqMethod.GET,
      sigFlag: SIG_FLAG.NO_SIG,
    };

    const raw_data = (await this.makeReq().request(reqParams)).data;
    if (raw_data?.resultInfo) {
      return {
        ...raw_data?.resultInfo,
      };
    }
    const wsKey = raw_data.key;
    return {
      wsKey,
      raw_data,
    };
  }
}
