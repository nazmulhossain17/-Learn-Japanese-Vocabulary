import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

const App = () => {
  return (
    <>
      <div className=''>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
};

export default App;
