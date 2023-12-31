import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Router, Navigate, Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home';
//Cấu hình redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
import UseStateDemo from './pages/hooks/UseStateDemo';
import ChangeProfile from './pages/hooks/EXUseState/ChangeProfile';
import UseEffect_DidMount from './pages/hooks/UseEffectDemo/UseEffect_DidMount';
import UseEffect_Didupdate from './pages/hooks/UseEffectDemo/UseEffect_Didupdate';
import UseEffect_Unmount from './pages/hooks/UseEffectDemo/UseEffect_Unmount';
import ExChatDemo from './pages/hooks/EXHookRedux/ExChatDemo';
import EXChangeFontSize from './pages/hooks/EXHookRedux/EXChangeFontSize';
import CRUDProduct from './pages/hooks/EXHookRedux/CRUDProduct';
import HookUseCallBack from './pages/hooks/EXHookUseCallBack/HookUseCallBack';
import EXHookUseMemo from './pages/hooks/EXHookUseMemo/EXHookUseMemo';
import EXHookUseRef from './pages/hooks/EXHookUseRef/EXHookUseRef';
import EXHookFormik from './pages/hooks/EXHookFormik/EXHookFormik';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Detail from './pages/Detail'
import Search from './pages/Search';
import TrangChu from './pages/TrangChu';
import AntDemo from './pages/AntDemo';
import TableAntd from './pages/TableAntd';
import ProductManagement from './pages/ProductManagement';
//Cấu hình chuyển hướng trang thông qua history
import {createBrowserHistory} from 'history'
import DemoHOC from './HOC/DemoHOC';
import DemoContainerComponent from './HOC/ContainerComponent/DemoContainerComponent';
import DrawerComponent from './HOC/DrawerComponent/DrawerComponent';
import DemoTestDrawer from './pages/DemoTestDrawer';
import DeviceTemplate from './templates/DeviceTemplate';
import HomeMobile from './pages/HomeMobile';


//history giúp chuyển hướng trang
export const history = createBrowserHistory()


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <DrawerComponent />
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<DeviceTemplate Component={<Home />} MobileComponent={<HomeMobile />} />}></Route>
          <Route path='use-state-demo' element={<UseStateDemo />}></Route>
          <Route path='use-state-change-profile' element={<ChangeProfile />}></Route>
          <Route path='use-effect-didmount' element={<UseEffect_DidMount />}></Route>
          <Route path='use-effect-didupdate' element={<UseEffect_Didupdate />}></Route>
          <Route path='use-effect-unmount' element={<UseEffect_Unmount />}></Route>
          <Route path='use-redux-demo-chat' element={<ExChatDemo />}></Route>
          <Route path='use-redux-demo-change-font-size' element={<EXChangeFontSize />}></Route>
          <Route path='use-redux-crud' element={<CRUDProduct />}></Route>
          <Route path='use-callback' element={<HookUseCallBack />}></Route>
          <Route path='use-memo' element={<EXHookUseMemo />}></Route>
          <Route path='use-ref' element={<EXHookUseRef />}></Route>
          <Route path='use-formik' element={<EXHookFormik />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='forgot-pass' element={<ForgotPassword />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='trang-chu' element={<TrangChu />}></Route>
          <Route path='antd-demo' element={<AntDemo />}></Route>
          <Route path='table-antd' element={<TableAntd />}></Route>
          <Route path='product-management' element={<ProductManagement />}></Route>

          <Route path='hoc' element={<DemoHOC />}></Route>
          <Route path='container-component' element={<DemoContainerComponent />}></Route>
          <Route path='test-drawer' element={<DemoTestDrawer />}></Route>

          <Route path='*' element={<Navigate to='' />} ></Route>


        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);


