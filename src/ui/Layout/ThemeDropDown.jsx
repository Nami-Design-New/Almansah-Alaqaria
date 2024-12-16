import { Dropdown } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../redux/slices/themeSlice";
import { useTranslation } from "react-i18next";

export default function ThemeDropDown() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleThemeChange = (selectedTheme) => {
    dispatch(setTheme(selectedTheme));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <i className="fa-regular fa-moon-stars"></i> {t("darkMode")}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange("light")}>
          <i className="fa-regular fa-sun"></i> {t("lightMode")}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleThemeChange("system")}>
          <i className="fa-regular fa-desktop"></i> {t("systemMode")}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
