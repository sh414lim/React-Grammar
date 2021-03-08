import React from 'react';

class NewCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.increaseCount = this.increaseCount.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        const { count } = props;

        return {
            //프로퍼티에 전달된 count 값을 보관한다.
            count,
            NewCounter: count === state.count
                //프로퍼티가 변경되지 않았다면 기존 state값으로 설정한다.
                ? state.newCounter
                //프로펕가 변경되었다면 변경된 프로퍼티값으로 설정한다
                : count,
        };
    }

    increaseCount() {
        this.setState(({ newCount }) => ({
            newCount: newCount + 1
        }))
    }
    render() {
        return (
            <div>
                현재 카운트:{this.state.newCount}
                <button onClick={this.increaseCount}>
                    카운트 증가
                </button>
            </div>
        );
    }
}
export default NewCounter;