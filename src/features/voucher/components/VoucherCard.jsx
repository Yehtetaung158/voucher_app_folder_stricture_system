import  html2pdf  from "html2pdf.js";
import printJS from "print-js";
import React from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const VoucherCard = () => {
  const [token] = useCookies(["token"]);
  const { id } = useParams();
  const fetcher = (url) => fetch(url,  { headers: { Authorization: `Bearer ${token.token}` } }).then((res) => res.json());
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers/" + id,
    fetcher
  );

  const handlePrint = () => {
    printJS({
      printable: "printArea",
      type: "html",
      //   header: "INVOICE",
      scanStyles: true,
      css: [
        "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
      ],
    });
  };

  const handlePdf = () => {
    const element = document.getElementById("printArea");
    html2pdf()
      .set({
        margin: 0.5,
        filename: `Voucher-${data?.data?.voucher_id}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  return (
    <>
      <div className=" flex gap-5">
        <div
          id="printArea"
          className="w-[14.8cm] bg-white p-5 print:w-full print:mx-auto border-gray-300"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">INVOICE</h1>
              <p className="text-xl">{data?.data?.voucher_id}</p>
            </div>
            <div className="text-right border-l-2 border-gray-300 pl-5">
              <p className="font-bold">Invoice to</p>
              <p>{data?.data?.customer_name}</p>
              <p className="text-xs flex gap-2 print:gap-8">
                <span>Date:</span>
                <samp>{new Date(data?.data?.sale_date).toLocaleDateString()}</samp>
              </p>
              <p className="text-xs flex gap-2 print:gap-8">
                <span>Time:</span>
                <span>{new Date(data?.data?.sale_date).toLocaleTimeString()}</span>
              </p>
            </div>
          </div>

          <table className="w-full mb-8">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-2 text-sm">No</th>
                <th className="text-left py-2 text-sm">Description</th>
                <th className="text-right py-2 text-sm">Qty</th>
                <th className="text-right py-2 text-sm">Price</th>
                <th className="text-right py-2 text-sm">Total</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.records?.map((record, index) => (
                <tr key={record.id} className="border-b border-gray-200">
                  <td className="py-2 text-sm">{index + 1}</td>
                  <td className="py-2 text-sm">{record?.product.product_name}</td>
                  <td className="text-right py-2 text-sm">{record.quantity}</td>
                  <td className="text-right py-2 text-sm">{record.product.price}</td>
                  <td className="text-right py-2 text-sm">
                    {record.quantity * record.product.price}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-right text-sm font-bold" colSpan={4}>
                  Total
                </td>
                <td className="py-2 text-right text-sm">
                  {parseFloat(data?.data?.total).toFixed(2)}
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-right text-sm font-bold" colSpan={4}>
                  Tax
                </td>
                <td className="py-2 text-right text-sm">
                  {parseFloat(data?.data?.tax).toFixed(2)}
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-right text-sm font-bold" colSpan={4}>
                  Net Total
                </td>
                <td className="py-2 text-right text-sm">
                  {parseFloat(data?.data?.net_total).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>

          <div className="text-xs mb-8">
            <div className="print:mb-4">
              <h2 className="font-bold mb-2">Payment Transfer to</h2>
              <p>Kpay, Wave - 09250152018</p>
              <p>KBZ Bank - 02730102705025601</p>
              <p>AYA Bank - 20003674121</p>
            </div>
            <div className="print:mt-4">
              <h2 className="font-bold text-xl">MMS IT</h2>
              <p>48, 1st Floor, Shan Kone St.</p>
              <p>+959-250-152-018</p>
              <p>enquiry@mms-it.com</p>
            </div>
          </div>

          <div className="border-t-2 border-gray-300 pt-4">
            <p className="mt-4 text-center text-sm">Thanks to You</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handlePrint}
          >
            Print Voucher
          </button>

          <button
            className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handlePdf}
          >
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default VoucherCard;
