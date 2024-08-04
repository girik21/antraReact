import React, { useEffect, useState } from 'react';
import { fetchSales } from '../../utils/apiCalls';
import './Style.css';

export default function DataChart() {
  const [salesData, setSalesData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [regionSums, setRegionSums] = useState({});

  useEffect(() => {
    const responseData = async () => {
      try {
        const response = await fetchSales();
        const data = response;

        setSalesData(data);

        if (data.length > 0) {
          const headers = Object.keys(data[0]).filter(header => header !== 'id');
          setTableHeaders(headers);

          const sums = data.reduce((acc, item) => {
            if (!acc[item.region]) {
              acc[item.region] = 0;
            }
            acc[item.region] += item.sales;
            return acc;
          }, {});

          setRegionSums(sums);
        }
      } catch (error) {
        console.log(error);
        alert("Data cannot be fetched!");
      }
    };

    responseData();
  }, []);

  return (
    <div className='mainContainer'>
      <h1 className='mainTitle'>Tesla Sales Data</h1>
      <div className='outerContainer'>
        <table className='tableContainer'>
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th className='tableRow' key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(regionSums).map((region, index) => (
              //Used react fragment to group multiple rows for each region together
              <React.Fragment key={index}>
                <tr>
                  <td className='tableRow'>{region}</td>
                  <td className='tableRow tableRowBolder'>SUM</td>
                  <td className='tableRow'>{regionSums[region]}</td>
                </tr>
                {salesData
                  .filter(sales => sales.region === region)
                  .map((sales, salesIndex) => (
                    <tr className='tableRow' key={salesIndex}>
                      {tableHeaders.map((header, headerIndex) => (
                        <td className='tableRow' key={headerIndex}>{sales[header]}</td>
                      ))}
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
