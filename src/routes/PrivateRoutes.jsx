import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate } from "react-router";
import Header from "../components/common/Header";
import ProfileProvider from "../providers/ProfileProvider";
const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.authToken ? (
        <>
          {" "}
          <ProfileProvider>
            <Header />
            <main className="mx-auto max-w-[1020px] py-8">
              <div className="container">
                <Outlet />
              </div>
            </main>
          </ProfileProvider>
        </>
      ) : (
        <Navigate to="/loginpage" />
      )}
    </>
  );
};

export default PrivateRoutes;
