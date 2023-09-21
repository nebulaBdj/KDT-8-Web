import { Component } from "react";

class EventCl extends Component {

    //생성자
    constructor(props) {
        super(props);

        this.handleCC = this.handleCC.bind(this);
    }


    handleCC() {

        console.log(this);
        alert('클래스형 컴포넌트');
    }

    handleCC2 = () => {
        console.log('화살표 함수', this);
        alert('클래스형 컴포넌트 2');
    }//화살표 함수를 쓰면서 바인드 할 필요 없게 됐다.

    showM = () => {
        alert(this.props.message);
    }

    render() {

        return <>
            <button onClick={this.handleCC}>클릭Class</button>
            <button onClick={this.handleCC2}>클릭Class2</button>
            <button onClick={this.showM}>show message</button>
        </>
    }
}

export default EventCl;