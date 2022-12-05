import { ConfigProvider, theme } from 'antd';
import React from 'react';
import { render } from 'react-dom';

import App from './app';

render(
    <ConfigProvider
        theme={{
            algorithm: [theme.darkAlgorithm],
        }}
    >
        <App />
    </ConfigProvider>,
    document.getElementById('root')
);
