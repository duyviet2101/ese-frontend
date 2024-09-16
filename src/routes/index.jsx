import {Navigate} from "react-router-dom";
import Page404 from "~/pages/404/index.jsx";
import ErrorBoundary from "~/components/ErrorBoundary/index.jsx";
import IndexPage from "~/pages/index.jsx";
import SearchExperts from "~/pages/SearchExperts/index.jsx";
import ThesisManagement from '~/pages/ThesisManagement/index.jsx';
import CreateThesis from '~/pages/CreateThesis/index.jsx';
import DetailThesis from '~/pages/DetailThesis/index.jsx';
import SearchExpertsByThesis from '~/pages/SearchExpertsByThesis/index.jsx';

export const routes = [
  {
    path: "/",
    // element: <ErrorBoundary><IndexPage/></ErrorBoundary>,
    element: <IndexPage/>,
    children: [
      {
        path: "/",
        // element: <HomePage/>
        element: <Navigate to={"/search-experts"}/>
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
      },
      {
        path: "/thesis/:id",
        element: <DetailThesis/>
      },
      {
        path: "/thesis/:id/search-experts",
        element: <SearchExpertsByThesis/>
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