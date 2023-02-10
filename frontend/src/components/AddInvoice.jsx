import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addProducts,
  addTotal,
  create,
} from '../redux/slices/invoice.slice';

import Button from '../assets/Button';
import LineHeading from '../assets/LineHeading';

export default function AddInvoice() {
  const dispatch = useDispatch();

  const { invoice, products, total, errors } = useSelector(
    (state) => state.invoice,
  );
  //   const [newProducts, setNewProducts] = useState([])

  const [newProduct, setNewProduct] = useState({
    sl: products ? products.length + 1 : 1,
    item: '',
    quantity: '',
    price: '',
  });
  const { sl, item, quantity, price } = newProduct;

  const onChangeHandler = (e, sl) => {
    dispatch(
      addProducts(
        products &&
          products.map((product) =>
            product.sl === sl
              ? {
                  ...product,
                  [e.target.name]: e.target.value,
                }
              : product,
          ),
      ),
    );
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    dispatch(addProducts([...products, newProduct]));
    // setNewProducts((prevState) => [...prevState, newProduct])
    setNewProduct({
      sl: products ? products.length + 2 : 2,
      item: '',
      quantity: '',
      price: '',
    });
    inputReference.current.focus();
  };

  const inputReference = useRef(null);

  useEffect(() => {
    // console.log(products)
    // dispatch(addProducts(newProducts))
  }, [products]);

  return (
    <div class="flex w-full flex-col items-center gap-10 md:rounded-lg bg-white p-12 shadow-2xl shadow-gray-300">
      <div class="text-xl font-semibold text-gray-500 ">
        Add Invoice
      </div>
      <div class="flex w-full flex-col gap-5">
        <LineHeading
          text={'Please enter the invoice details'}
        />
        <div class="w-full mx-auto">
          <div class="p-8">
            {/* <h1 class="text-3xl font-bold mb-6">Invoice</h1>
            <div class="flex items-center mb-4">
              <div class="w-1/4 font-bold text-gray-700">Date:</div>
              <div class="w-3/4 text-gray-800">January 1, 2022</div>
            </div>
            <div class="flex items-center mb-4">
              <div class="w-1/4 font-bold text-gray-700">To:</div>
              <div class="w-3/4 text-gray-800">Jane Doe</div>
            </div> */}
            <table class="table-auto w-full">
              <thead>
                <tr>
                  <th class="border-b px-4 py-2 text-left text-gray-700 font-bold">
                    Sl No.
                  </th>
                  <th class="border-b px-4 py-2 text-left text-gray-700 font-bold">
                    Item
                  </th>
                  <th class="border-b px-4 py-2 text-left text-gray-700 font-bold">
                    Quantity
                  </th>
                  <th class="border-b px-4 py-2 text-left text-gray-700 font-bold">
                    Unit Price
                  </th>
                  <th class="border-b px-4 py-2 text-right text-gray-700 font-bold">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product, index) => (
                    <tr key={index}>
                      <td class="border-b px-4 py-2 text-left text-gray-800">
                        {product.sl}
                      </td>
                      <td class="border-b px-4 py-2 text-left text-gray-800">
                        <input
                          type="text"
                          name="item"
                          value={product.item}
                          onChange={(e) =>
                            onChangeHandler(e, product.sl)
                          }
                          placeholder="Item"
                          class="w-full border-2 border-white hover:border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-500"
                        />
                      </td>
                      <td class="border-b px-4 py-2 text-left text-gray-800">
                        <input
                          type="text"
                          name="price"
                          value={product.price}
                          onChange={(e) =>
                            onChangeHandler(e, product.sl)
                          }
                          placeholder="Item"
                          class="w-full border-2 border-white hover:border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-500"
                        />
                      </td>
                      <td class="border-b px-4 py-2 text-left text-gray-800">
                        <input
                          type="text"
                          name="quantity"
                          value={product.quantity}
                          onChange={(e) =>
                            onChangeHandler(e, product.sl)
                          }
                          placeholder="Item"
                          class="w-full border-2 border-white hover:border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-500"
                        />
                      </td>
                      <td class="border-b px-4 py-2 text-right text-gray-800">
                        ${product.price * product.quantity}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <form
              onSubmit={addProductHandler}
              className="flex flex-row justify-center items-center gap-5"
            >
              <div class=" px-4 py-2 text-left text-gray-800">
                {sl}
              </div>
              <div class=" px-4 py-2 text-left text-gray-800">
                <input
                  type="text"
                  name="item"
                  value={item}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      item: e.target.value,
                    })
                  }
                  placeholder="Item"
                  class="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-500"
                  ref={inputReference}
                />
              </div>
              <div class=" px-4 py-2 text-left text-gray-800">
                <input
                  type="text"
                  name="price"
                  value={price}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      price: e.target.value,
                    })
                  }
                  placeholder="Unit Price"
                  class="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>
              <div class=" px-4 py-2 text-left text-gray-800">
                <input
                  type="text"
                  name="quantity"
                  value={quantity}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      quantity: e.target.value,
                    })
                  }
                  placeholder="Quantity"
                  class="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>
              <div class=" px-4 py-2 text-right text-gray-800">
                ${price * quantity}
                <button type="submit"></button>
              </div>
            </form>
            <div class="flex items-center mt-6">
              <div class="w-1/4 font-bold text-gray-700">
                Total:
              </div>
              <div class="w-3/4 text-gray-800 text-right">
                {total}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-sm gap-3 text-red-500">
          {errors &&
            Object.values(errors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
        </div>
        {invoice ? (
          <div className="flex justify-between gap-3">
            <div onClick={() => console.log('clear')}>
              <Button text={'CLEAR'} color={'bg-red-600'} />
            </div>
            <div onClick={() => console.log('update')}>
              <Button
                text={'UPDATE'}
                color={'bg-blue-600'}
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-end gap-3">
            <div onClick={() => dispatch(create())}>
              <Button text={'ADD'} color={'bg-green-600'} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
