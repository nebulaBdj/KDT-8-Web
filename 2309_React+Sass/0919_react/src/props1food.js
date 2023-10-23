import { Component } from "react";

class Food extends Component {
    render () {
        const style = {
            color : "red",
        }

        return (
            <div><span style={style}>{this.props.food}</span>는 내가 좋아하는 음식이다.</div>
        );
    }
}

Food.defaultProps = {
    food : '김밥',
}

export default Food;