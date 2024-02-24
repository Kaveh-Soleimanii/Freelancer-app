import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { DarkModeProvier } from "./context/DarkModeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerDashboard from "./pages/freelancerDashboard";
import Porposals from "./pages/Porposals";
import SumbmittedProject from "./pages/SumbmittedProject";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLayout from "./features/admin/AdminLayout";
import Users from "./pages/users";


const queryClient = new QueryClient();

function App() {

  return (
    <DarkModeProvier>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/complete-profile" element={<CompleteProfile />}></Route>

          <Route
            path="/owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />}></Route>
            <Route path="dashboard" element={<OwnerDashboard />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="projects/:id" element={<Project />}></Route>
          </Route>


          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />}></Route>
            <Route path="dashboard" element={<FreelancerDashboard />}></Route>
            <Route path="proposals" element={<Porposals />}></Route>
            <Route path="projects" element={<SumbmittedProject />}></Route>
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoute> 
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />}></Route>
            <Route path="dashboard" element={<AdminDashboard />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="proposals" element={<Porposals />}></Route>
            <Route path="projects" element={<SumbmittedProject />}></Route>

          </Route>

          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </QueryClientProvider>
    </DarkModeProvier>
  )
}

export default App;