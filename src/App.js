import "./styles.css";
import SearchCity from "./SearchCity";
import Overview from "./Overview";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

export default function App() {
  return (
    <div className="container App">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <header>
            <SearchCity />
          </header>
          <main>
            <div className="overview">
              <Overview />
            </div>
            <WeatherInfo />
          </main>
        </div>
        <small>
          <a
            href="https://codesandbox.io/p/sandbox/weather-app-react-n9dys8?file=%2Fsrc%2FApp.js%3A26%2C12"
            target="_blank"
          >
            open-source
          </a>{" "}
          by Nooshin Semsarilar
        </small>
      </div>
    </div>
  );
}
