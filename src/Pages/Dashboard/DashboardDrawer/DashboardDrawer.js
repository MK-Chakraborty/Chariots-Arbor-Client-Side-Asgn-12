import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashbordHome/DashboardHome';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../LogIn/AdminRoute/AdminRoute';
import ManageOrder from '../ManageOrder/ManageOrder';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';

const DashboardDrawer = () => {
    const { user, logOut, admin } = useAuth();
    let { path, url } = useRouteMatch();

    const drawer = (
        <div className="bg-dark bg-gradient py-5 h-100">
            <h1 className="text-white"><i className="far fa-user-circle"></i></h1>
            <h4 className="text-white pb-3">{user.displayName}</h4>

            <Link to={`${url}`} className="text-decoration-none text-white"><h5 className="border-0 border-top border-3 border-light pt-3">Dashboard</h5></Link><br />
            {admin ? <>
                <Link to={`${url}/manageOrders`} className="text-decoration-none text-white"><h5 className="border-0 border-top border-3 border-light pt-3">Manage Orders</h5></Link><br />
                <Link to={`${url}/addProduct`} className="text-decoration-none text-white"><h5 className="border-0 border-top border-3 border-light pt-3">Add Product</h5></Link><br />
                <Link to={`${url}/makeAdmin`} className="text-decoration-none text-white"><h5 className="border-0 border-top border-3 border-light pt-3">Make Admin</h5></Link><br />
                <Link to={`${url}/manageProduct`} className="text-decoration-none text-white"><h5 className="border-0 border-top border-bottom border-3 border-light pt-3 pb-4">Manage Products</h5></Link><br />
            </> :
                <>
                    <Link to={`${url}/payment`} className="text-decoration-none text-white"><h5 className="border-0 border-top border-3 border-light pt-3">Payment</h5></Link><br />
                    <Link to={`${url}/myOrders`} className="text-decoration-none text-white"><h5 className="border-0 border-top border-3 border-light pt-3">My Orders</h5></Link><br />
                    <Link to={`${url}/review`} className="text-decoration-none text-white"><h5 className="border-0 border-top border-bottom border-3 border-light pt-3 pb-4">Review</h5></Link><br />
                </>
            }

            <Button onClick={logOut} variant="dark" className="bg-gradient fs-5">Log Out</Button>
        </div>
    )

    return (
        <div>
            <h1 className="fs-1 fw-light lh-lg mt-5 mb-0 border-0 border-bottom border-dark border-3">DASHBOARD</h1>

            <Container fluid className="ps-0">
                <Row>
                    <Col xs={12} sm={12} md={4} lg={3}>
                        {drawer}
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={9}>
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <AdminRoute path={`${path}/manageOrders`}>
                                <ManageOrder></ManageOrder>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageProduct`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashboardDrawer;