import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [amounts, setAmounts] = useState({
    '10taka': 0,
    '20taka': 0,
    '50taka': 0,
    '100taka': 0,
    '500taka': 0,
    '1000taka': 0,
  });

  const calculateTotal = () => {
    return Object.keys(amounts).reduce((sum, key) => {
      return sum + amounts[key] * parseInt(key, 10);
    }, 0);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [name]: parseInt(value, 10) || 0,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 text-white">
      <Head>
        <title>Money Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white rounded-lg overflow-hidden shadow-md p-8 w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Money Calculator</h1>

        {/* Table for input and display */}
        <table className="w-full">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4">Note</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(amounts).map((note) => (
              <tr key={note} className="hover:bg-gray-100">
                <td className="py-3 px-4 font-medium">{note}</td>
                <td className="py-3 px-4">
                  <input
                    type="number"
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 transition"
                    id={note}
                    name={note}
                    value={amounts[note]}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="py-3 px-4">{amounts[note] * parseInt(note, 10)} taka</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Display the total amount */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-center text-gray-800">Total Amount: {calculateTotal()} taka</h2>
        </div>
      </main>
    </div>
  );
}
