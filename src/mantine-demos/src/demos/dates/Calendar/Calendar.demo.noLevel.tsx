import React from 'react';
import { Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { Calendar } from '@mantine/dates';

const code = `
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar allowLevelChange={false} />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar value={null} allowLevelChange={false} />
    </Group>
  );
}

export const noLevel: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
