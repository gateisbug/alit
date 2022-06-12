import React from 'react';
import ReactDOM from 'react-dom';
import 'style/common.scss';
import App from 'App';
import {HashRouter} from "react-router-dom";

// https://mui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=templates-store#populars

ReactDOM.render(
	<HashRouter basename={process.env.PUBLIC}>
		<App />
	</HashRouter>
	, document.getElementById('root')
);
