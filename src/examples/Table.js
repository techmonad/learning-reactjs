import React from "react";

class Table extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <Columns/>
                </tr>
            </table>
        );
    }

}

class Columns extends React.Component {
    render() {
        return (
            <React.Fragment>
                <td>Hello</td>
                <td>SKY</td>
            </React.Fragment>
        );
    }
}

export default Table;