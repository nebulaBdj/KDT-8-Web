import { Component } from "react";

class Counter extends Component {
    // constructor(props) {
    //     super(props);

    //     //바인딩
    //     this.hanincre = this.hanincre.bind(this);
    //     // this.hanDecre = this.hanDecre.bind(this);

    //     this.state = {
    //         number : 0,
    //     };
    // }

    // hanincre() {
    //     this.setState({number : this.state.number + 1});
    // }

    state = {
        number : 0,
    }

    hanDecre = () => {
        // this.setState({number : this.state.number - 1});
        // this.setState({number : this.state.number - 1});//하나 더 적어도 -1씩만 감소된다.

        this.setState((prevState) => ({
            number : prevState.number -1
        }));//함수형 형태로 만드는 것이 보편적이다.
    }

    render() {
        return( 
            <div>

                <h1>{this.state.number}</h1>
                <button onClick={this.hanincre}>증가</button>
                <button onClick={this.hanDecre}>감소</button>
            </div>
        )
    }
} 

export default Counter;