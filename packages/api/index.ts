import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

import type { AppRouter } from './src/root'
import { appRouter } from './src/root'
import { createCallerFactory, createTRPCContext, createWssContext } from './src/trpc'

/**
 * Create a server-side caller for the tRPC API
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
const createCaller = createCallerFactory(appRouter)

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
type RouterInputs = inferRouterInputs<AppRouter>

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
type RouterOutputs = inferRouterOutputs<AppRouter>

export { createTRPCContext, createWssContext, createCaller, appRouter }
export type { AppRouter, RouterInputs, RouterOutputs }
