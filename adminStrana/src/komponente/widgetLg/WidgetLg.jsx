import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Posljedni korisnici</h3>
        <table className="widgetLgTable">
          <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Korisnik</th>
            <th className="widgetLgTh">Datum</th>
            <th className="widgetLgTh">Vrijeme</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          </thead>
          <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                  src="https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg"
                  alt=""
                  className="widgetLgImg"
              />
              <span className="widgetLgName">Nedzma Imamovic</span>
            </td>
            <td className="widgetLgDate">2 Jun 2024</td>
            <td className="widgetLgAmount">6h</td>
            <td className="widgetLgStatus">
              <Button type="Approved"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                  src="https://static.printler.com/cache/8/e/1/a/0/c/8e1a0c16bf0c2cfa3bc131c209051cf5b64a2c46.jpg"
                  alt=""
                  className="widgetLgImg"
              />
              <span className="widgetLgName">Arnela Hodzic</span>
            </td>
            <td className="widgetLgDate">2 Jun 2024</td>
            <td className="widgetLgAmount">20min</td>
            <td className="widgetLgStatus">
              <Button type="Declined"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                  src="https://static.printler.com/cache/8/e/1/a/0/c/8e1a0c16bf0c2cfa3bc131c209051cf5b64a2c46.jpg"
                  alt=""
                  className="widgetLgImg"
              />
              <span className="widgetLgName">Tarik Kovac</span>
            </td>
            <td className="widgetLgDate">2 Jun 2024</td>
            <td className="widgetLgAmount">30min</td>
            <td className="widgetLgStatus">
              <Button type="Declined"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kT6v145H1R5KkLUExn9nndEzgjNP_knYug&s"
                  alt=""
                  className="widgetLgImg"
              />
              <span className="widgetLgName">Dzan Babahmetovic</span>
            </td>
            <td className="widgetLgDate">2 Jun 2024</td>
            <td className="widgetLgAmount">10min</td>
            <td className="widgetLgStatus">
              <Button type="Pending"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                  src="https://www.the-sun.com/wp-content/uploads/sites/6/2023/10/www-instagram-com-monkeycatluna-hl-851711797.jpg"
                  alt=""
                  className="widgetLgImg"
              />
              <span className="widgetLgName">Aldina Ismic</span>
            </td>
            <td className="widgetLgDate">2 Jun 2024</td>
            <td className="widgetLgAmount">2h</td>
            <td className="widgetLgStatus">
              <Button type="Approved"/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
  );
}
