import StatusBadge from "./StatusBadge";
import React from "react";


export default function Table({ headers, data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, cellIndex) => {
                const cellValue = row[header.key];

                return (
                  <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
                    {header.key === "status" ? (
                      <StatusBadge status={cellValue} />
                    ) : React.isValidElement(cellValue) ? (
                      cellValue
                    ) : (
                      <div className="text-sm text-gray-900">{cellValue}</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
