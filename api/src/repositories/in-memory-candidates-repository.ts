import { paramsSearchCandidate } from "../http/controllers/candidates";
import { CandidatesRepositoryInterface } from "./interfaces/candidates-repository";

type CandidateStatus = "new" | "contacted" | "interviewing" | "hired";

export type Candidate = {
  id: string;
  name: string;
  email: string;
  status: CandidateStatus;
  updatedAt: string;
};

const candidates: Candidate[] = [
  {
    id: "1",
    name: "Aisha Khan",
    email: "aisha@example.com",
    status: "interviewing",
    updatedAt: "2026-08-20T10:00:00.000Z"
  },
  {
    id: "2",
    name: "Marco Silva",
    email: "marco@example.com",
    status: "new",
    updatedAt: "2026-08-21T10:00:00.000Z"
  },
  {
    id: "3",
    name: "Priya Shah",
    email: "priya@example.com",
    status: "hired",
    updatedAt: "2026-08-22T10:00:00.000Z"
  }
];

export class InMemoryCandidatesRepository implements CandidatesRepositoryInterface {
  findCandidates(params: paramsSearchCandidate): Promise<Candidate[]> {
    throw new Error("Method not implemented.");
  }

}