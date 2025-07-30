import StatusBadge from "./StatusBadge";
import AnimatedButton from "./AnimatedButton";

export default function Table({ headers, data, onBuyClick }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-600">
        <thead className="bg-gray-50 dark:bg-dark-700">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-dark-700 divide-y divide-gray-200 dark:divide-dark-600">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 dark:hover:bg-dark-600"
            >
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
                  {cellIndex === Object.values(row).length - 2 ? (
                    <StatusBadge status={cell} />
                  ) : cellIndex === Object.values(row).length - 1 ? (
                    <AnimatedButton onClick={() => onBuyClick(row)}>
                      Buy Now
                    </AnimatedButton>
                  ) : (
                    <div className="text-sm text-gray-900 dark:text-gray-200">
                      {cell}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
