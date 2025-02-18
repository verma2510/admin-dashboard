import './products.css';
import {productsData} from '../../dummyData'
import { useState } from 'react';
import { FaEllipsisH } from "react-icons/fa";

export const Products = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(productsData.length / itemsPerPage);

    const handleNextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const paginatedProducts = productsData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  return (
    <div className="products">
      <div className="productsWrapper">
        <div className="productsTitle">Products</div>
        <p className="productsSubTitle">
          Manage your products and view their sales performance.
        </p>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Total Sales</th>
              <th>Created at</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  {product.name}
                </td>
                <td>
                  <span className="status-badge">{product.status}</span>
                </td>
                <td>{product.price}</td>
                <td>{product.sales}</td>
                <td>{product.createdAt}</td>
                <td>
                  <div className="dropdown">
                    <FaEllipsisH className="dropdown-btn"/>
                    <div className="dropdown-content">
                      <div className="dropdown-item">Edit</div>
                      <div className="dropdown-item">Delete</div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <span>
            Showing {itemsPerPage * (currentPage - 1) + 1} -{" "}
            {Math.min(itemsPerPage * currentPage, productsData.length)} of{" "}
            {productsData.length} products
          </span>
          <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              &lt; Prev
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
