import React, { Fragment } from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import MenuContainer from "./components/Menu/MenuContainer";
import {useGetData} from "./hooks/useGetData";
import IFrameContainer from "./components/IFrameContainer/IFrameContainer";
import NotFound from "./components/NotFound/NotFound";

function App() {
    const { data } = useGetData();

    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MenuContainer menuList={data} />}>
          {data?.map((menuItem) => (
              <Fragment key={menuItem.slug}>
                <Route
                    path={menuItem.slug}
                    element={<IFrameContainer {...menuItem} />}
                />

                {menuItem?.children?.map((childrenMenuItem) => (
                    <Route
                        key={childrenMenuItem.slug}
                        path={childrenMenuItem.slug}
                        element={<IFrameContainer {...childrenMenuItem} />}
                    />
                ))}
              </Fragment>
          ))}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
    );
}

export default App;
