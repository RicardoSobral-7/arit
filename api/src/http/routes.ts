import { FastifyInstance } from "fastify";
import { candidates } from "./controllers/candidates";

export interface SearchQuerystring {
  q: string;
  status?: string
  page?: number,
  pageSize?: number
}

export async function appRouters(app: FastifyInstance) {
  app.get < QueryString: SearchQuerystring > ('/candidates', candidates)
}