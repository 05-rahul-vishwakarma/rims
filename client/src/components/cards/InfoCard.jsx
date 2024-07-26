import { FaMessage } from "react-icons/fa6";
import Links from "../Links";

function InfoCard({ content }) {

    const linksData = [
        {
            data: "Office Order - All the students of MBBS course are informed to ensure their presence in the Family Adoption Programme Visit, Memo No. 1934, Dated : 13/07/2024",
            new: true,
        },
        {
            data: "Office Order - Revision of Working Hours at RIMS Ranchi, Memo No. 786, Dated : 05-07-2024",
            new: true,
        },
        {
            data: "  Provisional List of Supervisor for RIMS, Ranchi PhD Program Session 2023, Memo No. DRO/2024/264, Dated : 01/07/2024"
        }
    ]

    return (
        <div style={{
            border: "1px solid lightgray",
        }} className="lg:w-[30%] w-[95%]  mr-auto ml-auto  h-[400px] rounded-md mt-4 shadow-md " >
            <div style={{
                background: content?.headerColor
            }} className={`flex items-center py-2 gap-3  text-[#fffffffd] rounded-tr-md rounded-tl-md bg-[#9b4514de] `} >
                <span className="pl-2" > <FaMessage />  </span>
                <p className="font-[500] text-xs " > {content?.title} </p>
            </div>
            <div className="h-[92%] bg-[#c7c3ff34] rounded-xl  p-4 overflow-y-scroll  " >
                {
                    linksData.map((item, i) => (
                        <Links key={i} content={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default InfoCard