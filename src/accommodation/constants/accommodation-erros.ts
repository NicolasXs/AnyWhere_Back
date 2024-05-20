import { NotFoundException } from '@nestjs/common';

export const ACCOMMODATION_ERRORS = {
  NOT_FOUND: new NotFoundException({
    id: 'ACCOMMADATION-001',
    message: 'Accommodation not found',
  }),
};
