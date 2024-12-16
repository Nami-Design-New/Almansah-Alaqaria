import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function ThemeDropDown() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);

    if (selectedTheme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    } else {
      document.documentElement.setAttribute("data-theme", selectedTheme);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      if (theme === "system") {
        document.documentElement.setAttribute(
          "data-theme",
          e.matches ? "dark" : "light"
        );
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    handleThemeChange(theme);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  return (
    <Dropdown>
      <Dropdown.Toggle className="rounded_btn">
        <i
          className={`fa-regular ${
            theme === "dark"
              ? "fa-moon-stars"
              : theme === "light"
              ? "fa-sun"
              : "fa-desktop"
          }`}
        ></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleThemeChange("dark")}>
          <i className="fa-regular fa-moon-stars"></i> الوضع الداكن
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange("light")}>
          <i className="fa-regular fa-sun"></i> الوضع الفاتح
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange("system")}>
          <i className="fa-light fa-desktop"></i> الوضع المطلق
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
