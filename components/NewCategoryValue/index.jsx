import { BasicButton } from "@components/Buttons/BasicButton";
import { DoubleButton } from "@components/Buttons/DoubleButton";
import Image from 'next/image'
import { useState } from "react";
import COP from '../../public/COP.png';
import EUR from '../../public/EUR.png';
import MXN from '../../public/MXN.png';
import USD from '../../public/USD.png';
import { 
    CONTAINER_VALUE__section,
    INPUT_DATA__div,
    VALUE__input,
    VALUE_VIEW__div,
    SELECTED__div,
    OPTIONS__div,
    ARROW
  } from "./style";

export const NewCategoryValue = ({modeTran, type, setType, fixedValue, fixedBadge, fixedType}) => {
    const [option, setOption] = useState(false);
    const [badge, setBadge] = useState(COP);
    const badges = {
        "COP": COP,
        "EUR": EUR,
        "MXN": MXN,
        "USD": USD,
    }
    console.log(fixedValue)
    return (
        <CONTAINER_VALUE__section>
            {
                modeTran == 'view' ? 
                <>
                    <BasicButton color={fixedType == "ingreso" ? "principal" : "secundario" }>{fixedType}</BasicButton>
                    <p>Cantidad</p>
                    <INPUT_DATA__div>
                        <div>
                            <SELECTED__div>
                                <button>
                                    <Image
                                        src={badges[fixedBadge]}
                                        alt={fixedBadge}
                                        width={30}
                                        height={30}
                                    />
                                </button>
                            </SELECTED__div>
                        </div>
                        {/* <VALUE__input typeTran= {fixedType} type="number" value={parseInt(fixedValue+"")}/> */}
                        <VALUE_VIEW__div typeTran= {fixedType}>
                            <p>{fixedValue}</p>
                        </VALUE_VIEW__div>
                    </INPUT_DATA__div>
                    </>
                : <>
                    <DoubleButton type={type} setType={setType}/>
                    <p>Cantidad</p>
                    <INPUT_DATA__div>
                        <div>
                            <SELECTED__div>
                                <button onClick={()=>setOption(!option)}>
                                    <Image
                                        src={badge}
                                        alt="COP"
                                        width={30}
                                        height={30}
                                    />
                                    <ARROW>{option ? '<': '>'}</ARROW>
                                </button>
                            </SELECTED__div>
                            {
                                option ? 
                                <OPTIONS__div>
                                    <Image onClick={()=>{setBadge(COP); setType({...type, badge:'COP' }); setOption(false)}}
                                        src={COP}
                                        alt="COP"
                                        width={30}
                                        height={30}
                                    />
                                    <Image onClick={()=>{setBadge(USD); setType({...type, badge:'USD' }); setOption(false)}}
                                        src={USD}
                                        alt="USD"
                                        width={30}
                                        height={30}
                                    />
                                    <Image onClick={()=>{setBadge(MXN); setType({...type, badge:'MXN' }); setOption(false)}}
                                        src={MXN}
                                        alt="MXN"
                                        width={30}
                                        height={30}
                                    />
                                    <Image onClick={()=>{setBadge(EUR); setType({...type, badge:'EUR' }); setOption(false)}}
                                        src={EUR}
                                        alt="EUR"
                                        width={30}
                                        height={30}
                                    />
                                </OPTIONS__div>
                                :null
                            }
                        </div>
                        <VALUE__input typeTran= {type.type} type="number" onChange={(e) => setType({...type, value: parseInt(e.target.value)})} />
                    </INPUT_DATA__div>
                
                </>
                
            }
        </CONTAINER_VALUE__section>
    );
}