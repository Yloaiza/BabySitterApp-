import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskPage } from "./pages/TaskPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import './App.css'
import { Index } from "./components/Index";

function App() {


  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/index" />} />
        <Route path="/index" element={<Index />} />
        <Route path="/tasks-create" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskFormPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<TaskPage />} />
      </Routes>
      <Toaster />
    </div>
  </BrowserRouter>
  )
}

export default App
