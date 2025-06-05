import { useState,useContext } from 'react'
import { Suspense, lazy } from 'react'
import { Routes,Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from "./Pages/Error/ErrorPage.jsx"
import Loading from "./Components/UI/LoadingComponent/Loading.jsx"
import ErrorFallback from "./ErrorFallback";
import Layout from './Layout/Layout.jsx'
import AddJob from './Pages/AddJob/Addjob.jsx'
import Registeration from './Pages/Registeration/Registeration.jsx'
import Events from './Pages/Event/Event.jsx'
import Login from './Pages/Login/Login.jsx'
import GuestHome from './Pages/Home/Home.jsx'
import './App.css'
import { AuthContext } from './Context/AuthContext';
import AddEmailHistory from './Pages/Addmail/Addmail.jsx'
import JobSearch from './Pages/JobSearch/Jobsearch.jsx'
import EmailDashboard from './Pages/Emailservice/Emailservice.jsx'
import Addmailservice from './Pages/Addmail/Addmail.jsx'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard.jsx'
import StudentDashboard from './Pages/StudentProfile/Studentprofile.jsx'
import Yearbook from './Pages/Yearbook/Yearbook.jsx'
import PendingRegistrations from './Pages/PendingRegistration/PendingRegistrations.jsx'
import Database from './Pages/Database/Database.jsx'
import { Navigate } from 'react-router-dom'


// Lazy Loading compoments

// const Yearbook = lazy(()=> import("./Pages/Yearbook/Yearbook.jsx"))
const Test = lazy(()=> import("./Pages/Test/Test.jsx"))
// const AdminDashboard = lazy(()=> import("./Pages/AdminDashboard/AdminDashboard.jsx"))
// const StudentDashboard = lazy(()=> import("./Pages/StudentProfile/Studentprofile.jsx"))


function App() {

  const { user } = useContext(AuthContext);

  // Conditionally render homepage based on role
    const getHomeComponent = () => {
      if (!user) {
        // console.log("Current User:", user);
        return <GuestHome/>;
       
      } else if (user?.role === "admin") {
        return <AdminDashboard />;
      } else if (user?.role === "student") {
        return <GuestHome />;
      } else {
        return <GuestHome />; // Fallback if the role is invalid
      }
    };
    
  // console.log("Current User:", user.role);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Layout/>} errorElement={<ErrorPage />}>
            {/* Default Home based on User Role */}
            <Route index element={getHomeComponent()} />

            <Route path="/yearbook" element={<Yearbook />} />
            <Route path="/events" element={<Events />} />
            <Route path="/post-job" element={<AddJob />} />
            <Route path="/register" element={<Registeration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addmail" element={<AddEmailHistory/>}/>
            <Route path="/jobsearch" element={<JobSearch/>}/>
            <Route path="/emailservice" element={<EmailDashboard/>}/>
            <Route path="/pendingregistration" element={<PendingRegistrations/>}/>
            <Route path="/database" element={<Database/>}/>
            <Route path="/studentprofile"  element={user?.role === "student" ? <StudentDashboard /> : <Navigate to="/"/>}/>

            {/* test routes */}
            <Route path="/test" element={<Test/>}/>
            <Route path="/loading" element={<Loading/>}/>
            <Route path="/addmailservice" element={<Addmailservice/>}/>

            {/* Protecting routes according to the user role */}
            {/* <Route
            path="/post-job"
            element={user?.role === "admin" ? <AddJob /> : <Navigate to="/" />}
          /> */}

          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
