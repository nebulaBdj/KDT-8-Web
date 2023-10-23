import { Component } from "react";

class MyCom extends Component {
    //생성할 때
    componentDidMount() {
        console.log('Mount!');
    }

    //업데이트 될때
    componentDidUpdate(){
        console.log('Update');
    }

    //제거될때
    componentWillUnmount() {
        console.log('Unmount');
    }

    render() {
        return (
            <div>My Component {this.props.number} </div>
        )
    }
}

class LifeCycle extends Component {
    state = {
        number: 0,
        visble: false,
    }

    chageNum = () => {
        this.setState({number : this.state.number + 1});
    }

    visbleNum = () => {
        this.setState({number : !this.state.visble });
    }

    render(){
        return (
            <>
                <button onClick={this.chageNum}>Plus</button>
                <button onClick={this.visbleNum}>On/Off</button>
                {this.state.visble && <MyCom number={this.state.number} />}
            </>
        )
    }
}