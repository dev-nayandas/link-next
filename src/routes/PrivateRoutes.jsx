import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate } from "react-router";
import Header from "../components/common/Header";
const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      <Header />
      {auth.user ? (
        <main className="mx-auto max-w-[1020px] py-8">
          <div className="container">
            <Outlet />
          </div>
        </main>
      ) : (
        <Navigate to="/loginpage" />
      )}
    </>
  );
};

export default PrivateRoutes;
