import React from 'react';
import { Row, Col, Typography, Layout, Card, Input } from 'antd';
import { PlayCircleTwoTone,UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Homepage = () => {
    return (
        <>
            <Header className="homepage-header">
                <Row>
                    <Col className="header-column" span={5}>
                        <PlayCircleTwoTone twoToneColor="#ea0f0fd9" style={{ fontSize: '28px' }} />
                        <Typography.Title className="header-title" level={3}>
                            My Chat App
                    </Typography.Title>
                    </Col>
                </Row >
            </Header>
            {/* <div className="card"> */}
            <Card title="Chat App" style={{ textAlign: 'center', paddingTop: "200px" }}>
                <Input size="large" placeholder="Enter Your Name" prefix={<UserOutlined />} />
            </Card>
            {/* </div> */}
        </>
    );
}

export default Homepage;



