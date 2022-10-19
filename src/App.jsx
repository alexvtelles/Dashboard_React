import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Team from "./pages/Team";
import Inovices from "./pages/Inovices";
import Contacts from "./pages/Contacts";
import Bar from "./pages/Bar";
import Form from "./pages/Form";
import Pie from "./pages/Pie";
import Line from "./pages/Line";
import Faq from "./pages/Faq";
import Geography from "./pages/Geography";
import Calendar from "./pages/Calendar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/time" element={<Team />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/inovices" element={<Inovices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
