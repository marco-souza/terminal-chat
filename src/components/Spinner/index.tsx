import React from 'react';
import { Box, Color } from 'ink';
import Spinner from 'ink-spinner';

export default () => (
  <Box>
    <Color green>
      {/*
      // @ts-ignore */}
      <Spinner />
    </Color>
    {' connecting...'}
  </Box>
);
