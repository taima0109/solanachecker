import pino from 'pino';

const transport = pino.transport({
  target: 'pino-pretty',
});

export const logger = pino(
  {
    level: 'info',
    redact: ['poolKeys'],
    serializers: {
      error: pino.stdSerializers.err,
    },
    base: undefined,
  },
  transport,
);
Document README - fixing typoChange API - enhancing logsRemove UI - refactoring codeOptimize UI - improving performanceRefactor build - handling edge casesDocument database - fixing typoImprove auth - improving securityOptimize styles - enhancing logsRevert UI - improving performanceRemove database - improving security