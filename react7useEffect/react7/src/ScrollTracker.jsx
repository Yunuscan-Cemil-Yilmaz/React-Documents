import { useState, useEffect } from "react";

const ScrollTracker = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    console.log("useEffect RUN at ScrollTracker!"); // it will run after each render

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Temizleme işlemi
    };
    // Some operations (subscriptions, event listeners, timers) should be cleaned up when the component is removed.
    // useEffect allows defining a cleanup function with return inside it.
  });
  // if u dont have dependency like this
  // useEffect function will start after each render

  return (
    <div style={{ height: "150vh", padding: "20px" }}>
      <h1 style={{ marginTop: '350px' }}>Scroll Y Position: {scrollY}px</h1>
      <p style={{ marginBottom: '350px' }}>As you scroll the page, `useEffect` runs after each render.</p>
    </div>
  );
}

export default ScrollTracker;