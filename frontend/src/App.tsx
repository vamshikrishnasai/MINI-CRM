// src/App.tsx
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./Router.tsx"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <h1 className="flex justify-center text-4xl text-green-400 py-4">CRM</h1>
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
