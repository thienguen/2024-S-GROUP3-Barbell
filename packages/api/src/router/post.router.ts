import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const postRouter = createTRPCRouter({
  /**
   *
   */
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({ orderBy: { id: 'desc' } })
  }),

  /**
   *
   */
  byId: publicProcedure.input(z.object({ id: z.number() })).query(({ ctx, input }) => {
    return ctx.prisma.post.findFirst({ where: { id: input.id } })
  }),
  /**
   *
   */
  create: publicProcedure
    .input(
      z.object({
        content: z.string().min(1),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.post.create({
        data: input,
      })
    }),
  /**
   *
   */
  delete: publicProcedure.input(z.object({ id: z.number() })).mutation(({ ctx, input }) => {
    return ctx.prisma.post.delete({ where: { id: input.id } })
  }),

  /**
   *  @remarks
   *  This returns the user-specified most recent posts from all friends for a user
   *
   *  @param  id - the id of the user
   *  @param  postCount - the number of posts to get
   *  @returns an array of the [#] most recent posts from the user's friends
   */
  getRecentPostsByUserIdAndPostCount: publicProcedure
    .input(z.object({ id: z.number().int(), postCount: z.number().int() }))
    .query(async ({ ctx, input }) => {
      const friendsList = await ctx.prisma.friend.findMany({
        where: {
          userId: input.id,
        },
      })

      const friendIds: number[] = friendsList.map((item) => {
        return item.friendId
      })

      return ctx.prisma.post.findMany({
        where: {
          authorId: { in: friendIds },
        },
        select: {
          author: true,
          content: true,
          id: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: input.postCount,
      })
    }),

  /**
   *  @remarks
   *  This returns the posts for a user (id)
   *
   *  @param  id - the id of the user
   *  @param  postCount - the number of posts to get
   *  @returns an array of the [#] most recent posts from the user's friends
   */
  getUsersPostsByIdAndPostCount: publicProcedure
    .input(
      z.object({
        id: z.number().int(),
        posts: z.number().int(),
        page: z.number().int().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const pageSize = input.posts
      const pageNumber = input.page || 1
      const skip = (pageNumber - 1) * pageSize

      return ctx.prisma.post.findMany({
        where: {
          authorId: input.id,
        },
        select: {
          author: true,
          content: true,
          id: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: pageSize,
      })
    }),
})
