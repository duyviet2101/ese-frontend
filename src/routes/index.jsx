import {Navigate} from "react-router-dom";
import Page404 from "~/pages/404/index.jsx";
import ErrorBoundary from "~/components/ErrorBoundary/index.jsx";
import IndexPage from "~/pages/index.jsx";
import SearchExperts from "~/pages/SearchExperts/index.jsx";
import HomePage from '~/pages/HomePage/index.jsx';
import ThesisManagement from '~/pages/ThesisManagement/index.jsx';
import CreateThesis from '~/pages/CreateThesis/index.jsx';

export const routes = [
  {
    path: "/",
    element: <ErrorBoundary><IndexPage/></ErrorBoundary>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/search-experts",
        element: <SearchExperts/>
      },
      {
        path: "/thesis",
        element: <ThesisManagement/>
      },
      {
        path: "/thesis/create",
        element: <CreateThesis/>
      }
    ]
  },
  {
    path: "/404",
    element: <Page404/>
  },
  {
    path: "*",
    element: <Navigate to="/404" state={{
      messageToast: {
        type: "error",
        message: "Trang không tồn tại"
      },
    }}/>
  }
]