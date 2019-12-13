import React from 'react';

class ChildC extends React.Component {
    render() {
        return (
            <div>
                <h1>ChildC練習區以下</h1>
                <div value="okok">
                    <a>{this.props.value}</a>
                </div>
            </div >
        )
    }
}
export default ChildC
