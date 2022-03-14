import React from 'react';
import ReactDOM from 'react-dom';
import 'style/common.scss';
import App from 'App';
import {BrowserRouter} from "react-router-dom";

// https://mui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=templates-store#populars

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
