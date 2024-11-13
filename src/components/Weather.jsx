import React from "react";
const cold = <h1>Cold outside</h1>;
const nice = <h1>Nice Outside</h1>;
const hot = <h1>Hot Outside</h1>;

function checkWeather(temperatue) {
  if (temperatue < 15) {
    return cold;
  } else if (temperatue >= 15 && temperatue <= 25) {
    return nice;
  } else if (temperatue > 25) {
    return hot;
  }
}

const Weather = ({ temperatue }) => {
  return (
    <div>
      Weather: {temperatue} {checkWeather(temperatue)}
    </div>
  );
};

export default Weather;
