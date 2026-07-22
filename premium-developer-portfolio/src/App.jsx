
import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import LoadingScreen from "./components/common/LoadingScreen";
import BackToTop from "./components/common/BackToTop";
import MouseGlow from "./components/common/MouseGlow";
function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
    <LoadingScreen isLoading={loading} />

    {!loading && (
        <>
            <MouseGlow />
            <AppRoutes />
            <BackToTop />
        </>
    )}
</>
    );
}

export default App;

