import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from "antd"

const root = ReactDOM.createRoot(document.getElementById('root'));

const config = {
  token: {
    colorPrimary: "#ef4641",
    // colorPrimaryBg: "#ef4641",
    // colorBgContainer:  "#ef4641",
    borderRadius: 4,
  },
  components: {
    Table: {
      headerColor: "#fb923c",
      headerBg: "#fff7ed",
      showSorterTooltip: true
    },
  },
}

root.render(
  <React.StrictMode>
    <ConfigProvider theme={config}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);


