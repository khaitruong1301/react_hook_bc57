import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />} />
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

          <Route path='*' element={<Navigate to='' />} ></Route>


        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);


