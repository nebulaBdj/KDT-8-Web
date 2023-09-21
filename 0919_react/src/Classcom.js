import { Component } from 'react';
import PropTypes from 'prop-types';
// import React from 'react';//이렇게 쓸 경우 React.Component라고 쓰면된다.

//클래스형 컴포 넌트
//class 컴포넌트명 extendes Component

class ClassCom extends Component {
    //클래스형 컴포넌트에서 render 함수는 필수이다.
    
    render() {

        // const name = '홍길동';
        const { name } = this.props

        return (
            <>
                <h1>Hello {this.props.name} </h1>
                <p>여기는 클래스형 컴포넌트</p>
                <h1>{name}</h1>
                <h1>{this.props.name}</h1>
            </>
        );
    }
}

ClassCom.defaultProps = {
    name : '홍길동',
}

ClassCom.propTypes = {
    name : PropTypes.string// 항상 스크링이 들어가기 떄문에 오류가 나지 않는다.
}

// PropTypes.string.isrequirred,// 필수로 넣어야 할때

export default ClassCom;