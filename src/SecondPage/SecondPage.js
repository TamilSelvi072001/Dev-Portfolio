import React, { useEffect, useState } from "react"
import LoadingPage from "./LoadingPage";

const SecondPage=()=>{
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(true);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);
    
   
      return (
        <div>
          {loading ? (
            <LoadingPage /> // This will be displayed for the first 5 seconds
          ) : (
            <div>
              {/* Your main content for the page */}
              <h1>Welcome to the Second Page!</h1>
            </div>
          )}
        </div>
      );
}
export default SecondPage