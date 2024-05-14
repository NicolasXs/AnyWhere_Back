import { NotFoundException } from '@nestjs/common';

export const PROPERTY_ERRORS = {
  NOT_FOUND: new NotFoundException({
    id: 'PROPERTY-001',
    message: 'Property not found',
  }),
};
