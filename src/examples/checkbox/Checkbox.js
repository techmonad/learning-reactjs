import React from "react";

class Checkbox extends React.Component {
    render() {
        return (
            <div className="checkBox">
                <ul>
                    <li>
                        <input type="checkbox"/>
                        <label>This is first checkbox</label>
                    </li>

                    <li>
                        <input type="checkbox"/>
                        <label>This is second checkbox</label>
                    </li>

                </ul>
            </div>
        );

    }

}

export default Checkbox;