import { Col, Row, Tabs } from 'antd';
import generatePicker from 'antd/es/date-picker/generatePicker';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import React from 'react';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

const Main = () => {
    return (
        <>
            <Row gutter={5} justify="center" style={{ margin: '10px' }}>
                <Col span={24}>
                    <Tabs defaultActiveKey="1" size="middle" type="card" items={[
                        {
                            key: '1',
                            label: 'Card tab 1',
                            children: <div style={{ height: '200px', backgroundColor: 'rosybrown' }}>1</div>,
                        },
                        {
                            key: '2',
                            label: 'Card tab 2',
                            children: 'Content of tab 2',
                        },
                        {
                            key: '3',
                            label: 'Card tab 3',
                            children: <>
                                Content of card tab 3{' '}
                                <DatePicker.RangePicker onChange={console.log} />
                            </>,
                        },
                    ]}  />
                </Col>
            </Row>
        </>
    );
};

export default Main;
