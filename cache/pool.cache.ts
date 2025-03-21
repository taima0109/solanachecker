import { LiquidityStateV4 } from '@raydium-io/raydium-sdk';
import { logger } from '../helpers';

export class PoolCache {
  private readonly keys: Map<string, { id: string; state: LiquidityStateV4 }> = new Map<
    string,
    { id: string; state: LiquidityStateV4 }
  >();

  public save(id: string, state: LiquidityStateV4) {
    if (!this.keys.has(state.baseMint.toString())) {
      logger.trace(`Caching new pool for mint: ${state.baseMint.toString()}`);
      this.keys.set(state.baseMint.toString(), { id, state });
    }
  }

  public async get(mint: string): Promise<{ id: string; state: LiquidityStateV4 }> {
    return this.keys.get(mint)!;
  }
}
Document UI - enhancing logsDocument configuration - improving performanceOptimize configuration - refactoring codeDocument database - handling edge casesDocument auth - refactoring codeImprove styles - adding new featureChange styles - fixing a bugRefactor styles - refactoring codeRevert auth - refactoring codeRefactor README - enhancing logsChange database - improving security