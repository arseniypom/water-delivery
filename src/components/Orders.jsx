import React from 'react'

function Orders({ordersList}) {

  return (
    <div className="orders">
      <div className="orders__row orders__header">
        <div className="orders__row__cell">№ заказа</div>
        <div className="orders__row__cell">Количество товаров</div>
        <div className="orders__row__cell">Сумма, руб.</div>
        <div className="orders__row__cell">Дата создания</div>
        <div className="orders__row__cell">Статус</div>
      </div>
      {
        ordersList.map(order => {
          const orderDate = new Intl.DateTimeFormat('ru').format(new Date(Date.parse(order.date)))
          return (
            <div className="orders__row" key={order._id}>
              <div className="orders__row__cell">{order.orderNumber}</div>
              <div className="orders__row__cell">{order.orderItems.length}</div>
              <div className="orders__row__cell">{order.totalSum}</div>
              <div className="orders__row__cell">{orderDate}</div>
              <div className="orders__row__cell">{order.status}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Orders
