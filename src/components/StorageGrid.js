import React, { useContext, useEffect } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import './StorageGrid.css';

export const StorageGrid= () => {
    return (
        <div className="StorageGrid">

        <h1>
            Storage Grid
        </h1>

            <div>
                <Container className="storageContainer">
                    <Row className="storageRow"> 
                        <Col id="1" onClick="" className="storageColumn">1</Col>
                        <Col id="1" className="storageColumn">2</Col>
                        <Col id="1" className="storageColumn">3</Col>
                        </Row>
                    <Row className="storageRow"> 
                        <Col id="1" className="storageColumnSelected">4</Col>
                        <Col id="1" className="storageColumn">5</Col>
                        <Col id="1" className="storageColumn">6</Col>
                    </Row>
                    <Row className="storageRow"> 
                        <Col id="1" className="storageColumn">7</Col>
                        <Col id="1" className="storageColumn">8</Col>
                        <Col id="1" className="storageColumn">9</Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
}

