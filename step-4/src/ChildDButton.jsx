import React from 'react'

class ChildDButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <input value="輸入姓名(固定住)"></input>
                <button>{this.props.text}</button>
            </div>
        )
    }
}
export default ChildDButton