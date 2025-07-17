import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import { Layout } from "./components/Layout"
import WeatherDashboard from "./pages/WeatherDashboard"
import CityPage from "./pages/CityPage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        retry: false,
        refetchOnWindowFocus: false,
      }
    }
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider defaultTheme="dark">
            <Layout>
              <Routes>
                <Route path="/" element={<WeatherDashboard />} />
                <Route path="/city/:cityName" element={<CityPage />} />
              </Routes>
            </Layout>
          </ThemeProvider>
        </BrowserRouter >
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}


export default App
