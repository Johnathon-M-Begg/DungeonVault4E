import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { ReactElement } from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import { AppHeaderProps } from './AppHeaderProps.ts';

export default function AppHeader(props: AppHeaderProps): ReactElement {
  return (
    <Box marginBottom={8}>
      <Stack
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Link
          href="https://vitejs.dev"
          target="_blank"
        >
          <Box
            component="img"
            height="6em"
            alt="Vite"
            src={viteLogo}
          />
        </Link>
        <Link
          href="https://react.dev"
          target="_blank"
        >
          <Box
            component="img"
            height="6em"
            alt="React"
            src={reactLogo}
          />
        </Link>
      </Stack>
      <Typography
        variant="h2"
        textAlign="center"
      >
        {props.title}
      </Typography>
      <Typography
        variant="h5"
        textAlign="center"
      >
        {props.subtitle}
      </Typography>
    </Box>
  );
}
