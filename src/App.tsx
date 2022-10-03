import {useEffect, useState} from "react";
import MapBrazil from "./components/MapBrazil";
import {getPresidentInfo} from "./data/president";

import "./styles/index.css";
import "./styles/minireset.css";
import {findDistrictBySlug} from "./utils/cities";
import {Candidate} from "./components/Candidate";
import {CandidateInfo} from "./data/info";

function App() {
    const [district, setDistrict] = useState("BR");
    const [info, setInfo] = useState<CandidateInfo[] | null>(null);

    useEffect(() => {
        getPresidentInfo(findDistrictBySlug(district)).then((info) => setInfo(info));
    }, [district]);


    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div>
                <h1 className="text-6xl text-center text-amber-500">Candidatos</h1>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col items-center justify-center">
                    <MapBrazil width={450} height={500} district={district} changeDistrict={setDistrict} />
                    <p className="text-center">The selected district was {district}</p>
                </div>
                <div className="mt-8 ml-8 justify-center">
                    {info && <Candidate candidates={info} />}
                </div>
            </div>
        </div>
    );
}

export default App;
