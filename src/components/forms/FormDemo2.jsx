import { useState } from "react";

function FormDemo2() {
  const [country, setCountry] = useState("");

  const countries = [
    { value: "india", name: "India" },
    { value: "spain", name: "Spain" },
    { value: "japan", name: "Japan" },
  ];

  const indianStates = [
    { value: "gujarat", name: "Gujarat" },
    { value: "Rajasthan", name: "Rajasthan" },
    { value: "telangana", name: "Telengana" },
    { value: "punjab", name: "Punjab" },
  ];

  const spainStates = [
    { value: "barcelona", name: "Barcelona" },
    { value: "madrid", name: "Madrid" },
    { value: "valencia", name: "Valencia" },
    { value: "aragon", name: "Aragon" },
  ];

  const japanStates = [
    { value: "hokkaido", name: "Hokkaido" },
    { value: "tohoku", name: "Tohoku" },
    { value: "kanto", name: "Kanto" },
    { value: "kansai", name: "Kansai" },
  ];
  return (
    <div style={{textAlign: "center"}}>
      <select onChange={(e) => setCountry(e.target.value)} name="country">
        <>
          {countries.map((item) => {
            return <option value={item.value}>{item.name}</option>;
          })}
        </>
      </select>

      <select name="state">
        {country == "india" && (
          <>
            {indianStates.map((item) => {
              return <option value={item.value}>{item.name}</option>;
            })}
          </>
        )}

        {country == "spain" && (
          <>
            {spainStates.map((item) => {
              return <option value={item.value}>{item.name}</option>;
            })}
          </>
        )}

        {country == "japan" && (
          <>
            {japanStates.map((item) => {
              return <option value={item.value}>{item.name}</option>;
            })}
          </>
        )}
      </select>
    </div>
  );
}

export default FormDemo2;
