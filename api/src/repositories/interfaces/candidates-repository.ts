import { paramsSearchCandidate } from "../../http/controllers/candidates";
import { Candidate } from "../in-memory-candidates-repository";

export interface CandidatesRepositoryInterface {
  findCandidates(params: paramsSearchCandidate): Promise<Candidate[]>
}