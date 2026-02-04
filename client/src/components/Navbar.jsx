import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    localStorage.setItem("chit-chatTheme", selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("chit-chatTheme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  return (
    <>
      <div className="bg-primary flex justify-between px-5 py-2 z-99">
        <h1 className="text-xl font-bold">Chit-Chat</h1>

        <div className="flex gap-3">
          <span>Home</span>
          <span>About</span>
        </div>

        <div className="flex gap-3">
          <button
            className="btn btn-secondary btn-gradient"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="btn btn-secondary btn-gradient"
            onClick={() => navigate("/register")}
          >
            Register
          </button>

          <select
            name="theme"
            id="theme"
            className="select"
            onChange={handleThemeChange}
            value={theme}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="claude">Claude</option>
            <option value="spotify">Spotify</option>
            <option value="vscode">VSCode</option>
            <option value="black">Black</option>
            <option value="corporate">Corporate</option>
            <option value="ghibli">Ghibli</option>
            <option value="gourmet">Gourmet</option>
            <option value="luxury">Luxury</option>
            <option value="mintlify">Mintlify</option>
            <option value="pastel">Pastel</option>
            <option value="perplexity">Perplexity</option>
            <option value="shadcn">Shadcn</option>
            <option value="slack">Slack</option>
            <option value="soft">Soft</option>
            <option value="valorant">Valorant</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default NavBar;
