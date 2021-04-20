import React, {Component} from 'react';
import { Row, Col } from 'antd'
import Fig1 from '../image/Fig1.png';
import Fig2 from '../image/Fig2.png';
import Fig3 from '../image/Fig3.png';

class Figure extends Component {
    render() {
        return (
            <Row className="figures">
                <Col span={8} className="figure1">
                    <img src={Fig1}  alt="Figure 1"/>
                </Col>
                <Col span={8} className="figure2">
                    <img src={Fig2}  alt="Figure 2"/>
                </Col>
                <Col span={8} className="figure3">
                    <img src={Fig3}  alt="Figure 3"/>
                </Col>
            </Row>
        )
    }
}

export default Figure;