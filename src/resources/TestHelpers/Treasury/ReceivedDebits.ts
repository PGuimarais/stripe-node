// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../../StripeResource';
const stripeMethod = StripeResource.method;

export const ReceivedDebits = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/received_debits',
  }),
});