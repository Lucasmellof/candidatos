import axios from "axios";
import {CityInfo, getVoteInfoByInfo} from "../utils/cities";

import {CandidateInfo} from "./info";

interface TSEDataCandidate {
    seq: string; // sequence
    n: string; // vote number;
    nm: string; // candidate name
    cc: string; // candidate party
    nv: string; // vice president
    vap: string; // vote amount
    pvap: string; // vote amount percentage
}

interface TSEDataRaw {
    cand: TSEDataCandidate[];
}

function toCandidateInfo(data: TSEDataCandidate): CandidateInfo {
    return {
        sequence: parseInt(data.seq),
        name: data.nm.replace("&apos;", "'"),
        number: parseInt(data.vap),
        party: data.cc.split(" - ")[0],
        vice_president: data.nv,
        vote_percentage: data.pvap,
        votes: parseInt(data.vap),
    };
}

export async function getPresidentInfo(city?: CityInfo): Promise<CandidateInfo[] | null> {
    if (city === undefined) {
        return null;
    }
    const voteUrl = getVoteInfoByInfo(city);
    if (voteUrl == null) {
        return null;
    }
    const request = await axios.get<TSEDataRaw>(voteUrl);
    if (request.status !== 200) {
        return null;
    }
    return request.data.cand.map((cand) => toCandidateInfo(cand));
}
