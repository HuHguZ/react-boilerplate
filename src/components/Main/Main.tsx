import { Col, Row, Tabs } from 'antd';
import generatePicker from 'antd/es/date-picker/generatePicker';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import React from 'react';

import 'antd/es/date-picker/style/index';

const { TabPane } = Tabs;

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

const Main = () => {
    return (
        <>
            <Row gutter={5} justify="center" style={{ margin: '10px' }}>
                <Col span={24}>
                    <Tabs defaultActiveKey="1" size="middle" type="card">
                        <TabPane key="1" tab="Card Tab 1">
                            <div style={{ height: '200px', backgroundColor: 'rosybrown' }}>1</div>
                        </TabPane>
                        <TabPane key="2" tab="Card Tab 2">
                            Content of card tab 2
                        </TabPane>
                        <TabPane key="3" tab="Card Tab 3">
                            Content of card tab 3
                            <DatePicker.RangePicker onChange={console.log} />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
};

export default Main;
