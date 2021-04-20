import React, {Component} from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

class WhichH extends Component {
    state = {
        inputValue: 0,
    };

    onChange = value => {
        this.setState({
            inputValue: value,
        });
    };

    render() {
        const { inputValue } = this.state;
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={0}
                        max={999}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={0}
                        max={999}
                        style={{ marginLeft: 16 }}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}

export default WhichH;