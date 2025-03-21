import { Filter, FilterResult } from './pool-filters';
import { MintLayout } from '@solana/spl-token';
import { Connection } from '@solana/web3.js';
import { LiquidityPoolKeysV4 } from '@raydium-io/raydium-sdk';
import { logger } from '../helpers';

export class RenouncedFreezeFilter implements Filter {
  private readonly errorMessage: string[] = [];

  constructor(
    private readonly connection: Connection,
    private readonly checkRenounced: boolean,
    private readonly checkFreezable: boolean,
  ) {
    if (this.checkRenounced) {
      this.errorMessage.push('mint');
    }

    if (this.checkFreezable) {
      this.errorMessage.push('freeze');
    }
  }

  async execute(poolKeys: LiquidityPoolKeysV4): Promise<FilterResult> {
    try {
      const accountInfo = await this.connection.getAccountInfo(poolKeys.baseMint, this.connection.commitment);
      if (!accountInfo?.data) {
        return { ok: false, message: 'RenouncedFreeze -> Failed to fetch account data' };
      }

      const deserialize = MintLayout.decode(accountInfo.data);
      const renounced = !this.checkRenounced || deserialize.mintAuthorityOption === 0;
      const freezable = !this.checkFreezable || deserialize.freezeAuthorityOption !== 0;
      const ok = renounced && !freezable;
      const message: string[] = [];

      if (!renounced) {
        message.push('mint');
      }

      if (freezable) {
        message.push('freeze');
      }

      return { ok: ok, message: ok ? undefined : `RenouncedFreeze -> Creator can ${message.join(' and ')} tokens` };
    } catch (e) {
      logger.error(
        { mint: poolKeys.baseMint },
        `RenouncedFreeze -> Failed to check if creator can ${this.errorMessage.join(' and ')} tokens`,
      );
    }

    return {
      ok: false,
      message: `RenouncedFreeze -> Failed to check if creator can ${this.errorMessage.join(' and ')} tokens`,
    };
  }
}
Optimize build - enhancing logsUpdate tests - fixing typoChange tests - improving securityOptimize UI - fixing typoDocument auth - refactoring codeRemove README - updating docsRevert dependencies - adding new featureRemove auth - updating docsUpdate API - fixing a bugRefactor build - removing deprecated functionChange database - removing deprecated functionFix UI - fixing typoDocument dependencies - handling edge casesAdd dependencies - improving performanceRevert auth - fixing typoUpdate database - improving performanceUpdate build - refactoring codeOptimize auth - adding new featureImprove build - improving performance