import React, { useEffect, useState } from 'react';
import { fetchSales } from '../../utils/apiCalls';
import styles from './Filter.module.css';

export default function FilteredChart() {
    const [saleData, setSalesData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [regions, setRegions] = useState([]);
    const [models, setModels] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedModel, setSelectedModel] = useState('');

    useEffect(() => {
        const dataFetcher = async () => {
            try {
                const response = await fetchSales();
                setSalesData(response);
                setFilteredData(response);

                if (response.length > 0) {
                    const filteredHeader = Object.keys(response[0]).filter(header => header !== 'id');
                    setHeaders(filteredHeader);

                    const uniqueRegions = [...new Set(response.map(item => item.region))];
                    const uniqueModels = [...new Set(response.map(item => item.model))];
                    setRegions(uniqueRegions);
                    setModels(uniqueModels);
                }
            } catch (error) {
                alert("Error fetching data");
                console.log(error);
            }
        };
        dataFetcher();
    }, []);

    useEffect(() => {
        let data = saleData;
        if (selectedRegion) {
            data = data.filter(item => item.region === selectedRegion);
        }
        if (selectedModel) {
            data = data.filter(item => item.model === selectedModel);
        }
        setFilteredData(data);
    }, [selectedRegion, selectedModel, saleData]);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.outerContainer}>
                <h1 className={styles.secondHeader}>Advanced Table</h1>
                <div className={styles.filterContainer}>
                    <label>
                        Region:
                        <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
                            <option value="">All</option>
                            {regions.map((region, index) => (
                                <option key={index} value={region}>{region}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Model:
                        <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                            <option value="">All</option>
                            {models.map((model, index) => (
                                <option key={index} value={model}>{model}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <table className={styles.tableContainer}>
                    <thead>
                        <tr className={styles.tableRow}>
                            {headers.map((header, headerIndex) => (
                                <td className={styles.tableData} key={headerIndex}>{header}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((sales, salesIndex) => (
                            <tr className={styles.tableRow} key={salesIndex}>
                                {headers.map((header, headerIndex) => (
                                    <td className={styles.tableData} key={headerIndex}>{sales[header]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
