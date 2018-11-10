import React from 'react';
import enhance from '../hoc/wrapInputBox';
import {parseDate} from '../../util/common';

class CreateBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            finishDate: null
        };

        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeFinishDate = this.handleChangeFinishDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        if (!this.state.finishDate || !this.state.text) {
            return;
        }

        var payload = {
            finishDate: parseDate(this.state.finishDate),
            text: this.state.text
        };

        this.props.addNew(payload);
    }

    handleChangeText(event) {
        this.setState({text: event.target.value});
    }

    handleChangeFinishDate(event) {
        this.setState({finishDate: event.target.value});
    }

    render() {
        return (
            <div className="row">
                <input
                    autoFocus
                    type="text"
                    className="form-control add-todo rightSpace"
                    value={this.state.value}
                    // onKeyUp={handleKeyUp}
                    onChange={this.handleChangeText}
                    placeholder="Add New"
                />
                <input
                    className="rightSpace"
                    onChange={this.handleChangeFinishDate}
                    type="date"/>
                <button onClick={this.handleSubmit}>Create</button>
            </div>

        )
    };
}

export default enhance(CreateBox);
