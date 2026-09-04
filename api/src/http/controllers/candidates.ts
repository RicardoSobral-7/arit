import { FastifyReply, FastifyRequest } from "fastify";





export async function candidates(request: FastifyRequest, reply: FastifyReply) {



  const filteredCandidates = candidates

  return reply.status(200).send({

  })
}