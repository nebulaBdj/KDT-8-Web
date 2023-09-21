import { Component } from "react";

class Work extends Component {

    constructor(props) {
        super(props);

        this.sech = this.sech.bind(this);
        this.sub = this.sub.bind(this);

        this.state = {
            number : 1,
        }



    }




    // state = {
    //     // word : '검정색 글씨',
    //     // color : 'black',
    //     // display : 'block',
    // }

    red = () => {
        this.setState((prevState) => ({word : prevState.word = "빨간색 글씨", color : prevState.color = 'red'}));
    }

    blue = () => {
        this.setState((prevState) => ({word : prevState.word = "파란색 글씨", color : prevState.color = 'blue'}))
    }

    none = () => {
        this.setState((prevState) => ({display : prevState.display = 'none'}))
    }


    sech () {
        const tbody = document.querySelector('.table');
        const sechKey = document.querySelector('.sechKey').value;
        const select = document.querySelector('.select');
        let selectKey = select.value;

        let arr = [];
        for(let i=1; i<this.state.number; i++){
            const td_num = document.querySelector(`.td_num${i}`).innerText;
            const td_ti = document.querySelector(`.td_ti${i}`).innerText;
            const td_na = document.querySelector(`.td_na${i}`).innerText;

            console.log(td_num);
            console.log(td_ti);
            console.log(td_na);

            let obj = {
                num : td_num,
                title : td_ti,
                wname : td_na,
            }

            arr.push(obj);
    
        }

        console.log('생성된 배열',arr);
        // console.log('생성 배열의 첫번쨰 타이틀 값',arr[0].title);
        // console.log('생성 배열의 첫번쨰 이름 값',arr[0]);
        console.log('검색한 키워드',sechKey);
        console.log('선택된 셀렉트 옵션',selectKey);
        console.log('현재 스테이트 값', this.state.number-1);

        if(selectKey === '제목'){
            let arr1 = arr.filter((a) => {
                return a.title.includes(`${sechKey}`);
            })

            console.log(arr1);
            
        } else if(selectKey === '작성자'){
            let arr2 = arr.filter((a) => {
                return a.wname.includes(`${sechKey}`);
            })

            console.log(arr2);
        }

        // arr.filter((title, name) => {
        //     return title.includes()
        // })
        


    }

    sub () {
        this.setState((prevState) => ({number : prevState.number + 1}))
        const name = document.querySelector('.name').value;
        const title = document.querySelector('.title').value;
        const table = document.querySelector('.table');

        const tr = document.createElement('tr');
        const td_num = document.createElement('td');
        const td_ti = document.createElement('td');
        const td_na = document.createElement('td');

        console.log('인풋값', name);
        console.log('인풋값', title);

        const num = this.state.number;

        td_num.innerText = num;
        td_ti.innerText = title;
        td_na.innerText = name;
        tr.setAttribute('class',`tr${num}`);
        td_num.setAttribute('class',`td_num${num}`);
        td_ti.setAttribute('class',`td_ti${num}`);
        td_na.setAttribute('class',`td_na${num}`);
        tr.appendChild(td_num);
        tr.appendChild(td_ti);
        tr.appendChild(td_na);

        table.appendChild(tr);

        console.log('스테이트 상태', num);

    }

    render() {
        return(
            <div>
                {/* <h1 style={{color : this.state.color}}>{this.state.word}</h1>
                <button onClick={this.red} >빨간색</button>
                <button onClick={this.blue}>파란색</button> */}
                {/* <button onClick={this.none}>사라져라</button>
                <h1 style={{display : this.state.display}}>안녕하세요</h1> */}
                <form className="form">
                    <fieldset className="field">
                        <label>작성자 : </label><input className="name" type="text" placeholder="작성자"></input>
                        <label>제목 : </label><input className="title" type="text" placeholder="제목"></input>
                        <button type="button" onClick={this.sub}>작성</button>
                    </fieldset>
                </form>
                <br />
                <select className="select">
                    <option>작성자</option>
                    <option>제목</option>
                </select>
                <input className="sechKey" type="text" placeholder="검색어"></input>
                <button type="button" onClick={this.sech}>검색</button>
                
                <br />
                <br />
                <table className="bittable" style={{border : '1px solid black'}}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody className="table">

                    </tbody>
                </table>
            </div>
        )
    }

}

export default Work;