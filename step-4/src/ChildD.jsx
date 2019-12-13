import React from 'react'
import ChildDButton from './ChildDButton.jsx'

class ChildD extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>ChildD練習區以下</h1>
                <ChildDButton text='我在d區' />
            </div>
        )
    }
}
export default ChildD