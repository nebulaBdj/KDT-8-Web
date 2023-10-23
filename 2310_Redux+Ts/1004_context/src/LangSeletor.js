import { useContext } from "react";
import MyContext from "./lang-context";
import Mytema from "./tema_context";


export default function LanguageSelector() {

    const value = useContext(MyContext);
    const value2 = useContext(Mytema);

    return( <div>
                <h2>
                    현재 선택된 언어 : {value.language}
                </h2>
                <h2>
                    현재 선택된 테마 : {value2.tema}
                </h2>
                <select value={value.language} onChange={(e) => value.setLang(e.target.value)}>
                    <option value="ko">한국어</option>
                    {/* <option value="jp">일본어</option> */}
                    <option value="en">영어</option>
                </select>
                <select value={value2.language} onChange={(e) => value2.setTema(e.target.value)}>
                    <option value="dark">dark</option>
                    <option value="light">light</option>
                </select>
            </div>
    )


    //첫 번째 방법
    // return ( <MyContext.Consumer>
    //     {(value) => {
    //         return <div>
    //             <h2>
    //                 현재 선택된 언어 : {value.language}
    //             </h2>
    //             <select value={value.language} onChange={(e) => value.setLang(e.target.value)}>
    //                 <option value="ko">한국어</option>
    //                 <option value="jp">일본어</option>
    //                 <option value="en">영어</option>
    //             </select>
    //         </div>
    //     }}
    // </MyContext.Consumer>
    // );
}