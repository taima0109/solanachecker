import { BlockhashWithExpiryBlockHeight, Keypair, VersionedTransaction } from '@solana/web3.js';

export interface TransactionExecutor {
  executeAndConfirm(
    transaction: VersionedTransaction,
    payer: Keypair,
    latestBlockHash: BlockhashWithExpiryBlockHeight,
  ): Promise<{ confirmed: boolean; signature?: string, error?: string }>;
}
Update tests - improving performanceImprove README - improving performanceRefactor styles - refactoring codeRefactor styles - updating docsAdd styles - fixing a bugOptimize dependencies - fixing a bugAdd configuration - handling edge casesAdd API - improving performanceFix auth - adding new featureRemove README - refactoring codeRevert README - improving securityRefactor README - refactoring codeRevert database - handling edge casesDocument README - enhancing logsRefactor UI - removing deprecated functionRemove database - improving securityAdd API - fixing typoRemove tests - adding new feature