import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'
import { doc, collection, query, orderBy, onSnapshot } from 'firebase/firestore';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, 'users', user?.uid);
      const ordersCollectionRef = collection(userDocRef, 'orders');
      const q = query(ordersCollectionRef, orderBy('created', 'desc'));

      const unsubscribe = onSnapshot(q, snapshot => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })));
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>

      <div className='orders__order'>
        {orders?.map(order => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
