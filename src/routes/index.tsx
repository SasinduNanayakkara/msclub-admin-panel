import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "../components";
import { refreshToken } from "../store/user-store/userActions";
import {
	TopSpeakerList,
	EventList,
	DeletedEventList,
	Login,
	WebinarList,
	DeletedWebinarList,
	ApplicationList,
	InquiryList,
	DeletedInquiryList,
	Dashboard,
} from "../pages";
import PrivateRoute from "./PrivateRoute";

const PageRoutes: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(refreshToken());
	}, [dispatch]);

	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<div className="container">
					<Switch>
						<PrivateRoute path="/speakers" component={TopSpeakerList} />
						<PrivateRoute path="/events/deleted" component={DeletedEventList} />
						<PrivateRoute path="/events/" component={EventList} />
						<PrivateRoute path="/webinars/deleted" component={DeletedWebinarList} />
						<PrivateRoute path="/webinars/" component={WebinarList} />
						<PrivateRoute path="/applications" component={ApplicationList} />
						<PrivateRoute path="/inquiries/deleted" component={DeletedInquiryList} />
						<PrivateRoute path="/inquiries" component={InquiryList} />
						<Route path="/signin" component={Login} exact />
						<PrivateRoute path="/" component={Dashboard} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default PageRoutes;
