import { rest } from 'msw'

import * as ENDPOINTS from '../config/urls'

import * as MOCKS from './responses'

export const handlers = [
  rest.post(`${ENDPOINTS.LOGIN}`, (request, response, context) => {
    return response(
      context.delay(10),
      context.status(200),
      context.json(MOCKS.LOGIN),
    )
  })
]
