import { Filter, FilterResult } from './pool-filters';
import { Connection } from '@solana/web3.js';
import { LiquidityPoolKeysV4 } from '@raydium-io/raydium-sdk';
import { logger } from '../helpers';

export class BurnFilter implements Filter {
  constructor(private readonly connection: Connection) {}

  async execute(poolKeys: LiquidityPoolKeysV4): Promise<FilterResult> {
    try {
      const amount = await this.connection.getTokenSupply(poolKeys.lpMint, this.connection.commitment);
      const burned = amount.value.uiAmount === 0;
      return { ok: burned, message: burned ? undefined : "Burned -> Creator didn't burn LP" };
    } catch (e: any) {
      if (e.code == -32602) {
        return { ok: true };
      }

      logger.error({ mint: poolKeys.baseMint }, `Failed to check if LP is burned`);
    }

    return { ok: false, message: 'Failed to check if LP is burned' };
  }
}
Remove database - handling edge casesOptimize configuration - removing deprecated functionAdd README - enhancing logsOptimize README - removing deprecated functionRemove UI - refactoring codeAdd dependencies - refactoring codeRevert styles - fixing a bugRevert build - refactoring codeRevert build - refactoring codeRemove tests - updating docsFix configuration - refactoring codeRevert configuration - fixing a bugFix README - updating docsChange configuration - adding new featureRefactor dependencies - fixing typoFix dependencies - refactoring codeChange tests - improving performanceImprove dependencies - removing deprecated function