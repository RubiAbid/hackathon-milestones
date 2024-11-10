import React from "react";

const OrdersPage = () => {
  return (
    <div className="orders-page">
      <table className="orders-table">
        <thead>
          <tr className="text-left">
            <th className="hidden-on-sm">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden-on-sm">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm row-bg">
            <td className="hidden-on-sm">1237861238721</td>
            <td>19.07.2023</td>
            <td>89.90</td>
            <td className="hidden-on-sm">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="status">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm odd-row">
            <td className="hidden-on-sm">1237861238721</td>
            <td>19.07.2023</td>
            <td>89.90</td>
            <td className="hidden-on-sm">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="status">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm odd-row">
            <td className="hidden-on-sm">1237861238721</td>
            <td>19.07.2023</td>
            <td>89.90</td>
            <td className="hidden-on-sm">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="status">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
