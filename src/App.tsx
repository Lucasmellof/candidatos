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
        <div className="h-screen w-screen flex flex-col items-center bg-[#070212] gap-12">
            <h1 className="text-5xl lg:text-6xl text-center font-bold text-white uppercase italic mt-6">Candidatos</h1>

            <div className="flex flex-col justify-between gap-x-12 items-center gap-y-4 lg:gap-y-0 lg:flex-row lg:mt-0">
                <div className="flex flex-col items-center justify-evenly gap-4">
                    <div className="drop-shadow-2xl flex justify-center items-center">
                        <div className="absolute blurred ml-20 mb-16 w-1/2 h-1/2 -z-10" />
                        <MapBrazil svgClassName="w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]" district={district} changeDistrict={setDistrict} />
                    </div>
                    <div className="flex flex-row space-x-2">
                        <button className="btn btn-primary" onClick={() => setDistrict("BR")}>Brasil</button>
                        <button className="btn btn-primary" onClick={() => setDistrict("ZZ")}>Exterior</button>
                    </div>
                </div>
                <div className="px-2 py-2 justify-center drop-shadow-2xl rounded-lg">
                    <div className="absolute blurred w-full h-full" />
                    {info && <Candidate candidates={info} />}
                </div>
            </div>
        </div>
    );
}

export default App;
