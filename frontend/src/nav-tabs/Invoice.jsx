import React, { useEffect, useState } from 'react';
import AddCustomer from '../components/AddCustomer';
import AddInvoice from '../components/AddInvoice';
import PreviewInvoice from '../components/PreviewInvoice';

import { useSelector } from 'react-redux';

export default function Invoice() {
  const { customer } = useSelector((state) => state.customer);
  const { invoice } = useSelector((state) => state.invoice);

  const [tab, setTab] = useState('add');

  useEffect(() => {
    // if customer is there, then go to invoice tab
    if (invoice) {
      setTab('preview');
    } else if (customer) {
      setTab('invoice');
    }
  }, []);

  return (
    <>
      <div class="flex items-center gap-2  m-8  mt-24">
        <div
          class={`${
            tab === 'add' ? 'h-8 w-8  bg-green-500' : 'h-6 w-6  bg-gray-300'
          } rounded-full`}
          onClick={() => setTab('add')}
        ></div>
        <div class="h-1 w-20  bg-gray-300 rounded-full"></div>
        <div
          class={`${
            tab === 'invoice' ? 'h-8 w-8  bg-green-500' : 'h-6 w-6  bg-gray-300'
          } rounded-full`}
          onClick={() => setTab('invoice')}
        ></div>
        <div class="h-1 w-20  bg-gray-300 rounded-full"></div>
        <div
          class={`${
            tab === 'preview' ? 'h-8 w-8  bg-green-500' : 'h-6 w-6  bg-gray-300'
          } rounded-full`}
          onClick={() => setTab('preview')}
        ></div>
      </div>
      {tab === 'add' && <AddCustomer />}
      {tab === 'invoice' && <AddInvoice />}
      {tab === 'preview' && <PreviewInvoice />}
    </>
  );
}
