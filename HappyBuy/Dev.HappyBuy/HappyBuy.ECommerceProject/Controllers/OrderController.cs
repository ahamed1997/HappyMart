// <copyright file="OrderController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Reflection;
    using System.Web.Http.Cors;
    using HappyBuyBL;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL;
    using HappyBuyDAL.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Order related API's.
    /// </summary>
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IHBOrderBL hBOrderBL;

        /// <summary>
        /// Initializes a new instance of the <see cref="OrderController"/> class.
        /// </summary>
        /// <param name="hBOrderBL">Order Entity Injection.</param>
        public OrderController(IHBOrderBL hBOrderBL)
        {
            this.hBOrderBL = hBOrderBL;
        }

        /// <summary>
        /// Placing Order.
        /// </summary>
        /// <param name="order">Order Items.</param>
        /// <returns>Returns OrderID.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/PlaceOrder")]
        public int PlaceOrder(List<Orders> order)
        {
            int i = 0;
            for (int j = 0; j < order.Count; j++)
            {
                Dictionary<string, object> keyValues = this.GetProperty<Orders>(order[j]);
                i = this.hBOrderBL.PlaceOrder<Orders>(keyValues);
            }

            return i;
        }

        /// <summary>
        /// MakePayment.
        /// </summary>
        /// <param name="orderDetails">Payment Order Details.</param>
        /// <returns>Insert Result.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/MakePayment")]
        public int MakePayment(OrderDetails orderDetails)
        {
            Dictionary<string, object> keyValues = this.GetProperty<OrderDetails>(orderDetails);
            int i = this.hBOrderBL.PlaceOrder<OrderDetails>(keyValues);
            return i;
        }

        /// <summary>
        /// MakePayment.
        /// </summary>
        /// <param name="product">Payment Order Details.</param>
        /// <returns>Insert Result.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/GetOrderDetails")]
        public object GetOrderDetails(Product product)
        {
            Dictionary<string, object> keyValues = this.GetProperty<OrderDetails>(product);
            var i = this.hBOrderBL.GetOrderDetails<Product>(keyValues);
            return i;
        }

        /// <summary>
        /// MakePayment.
        /// </summary>
        /// <param name="product">Payment Order Details.</param>
        /// <returns>Insert Result.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/getallorders")]
        public object GetAllOrders()
        {
            Product product = new Product();
            Dictionary<string, object> keyValues = this.GetProperty<OrderDetails>(product);
            var i = this.hBOrderBL.GetAllOrders<Product>(keyValues);
            return i;
        }

        /// <summary>
        /// MakePayment.
        /// </summary>
        /// <param name="product">Payment Order Details.</param>
        /// <returns>Insert Result.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/getallorderdetails")]
        public object GetAllOrderDetails(Product product)
        {
            Dictionary<string, object> keyValues = this.GetProperty<OrderDetails>(product);
            var i = this.hBOrderBL.GetAllOrdersDetails<Product>(keyValues);
            return i;
        }

        /// <summary>
        /// MakePayment.
        /// </summary>
        /// <returns>Insert Result.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/getallshippingaddress")]
        public object GetAllShippingAddress()
        {
            ShippingAddress shippingAddress = new ShippingAddress();
            Dictionary<string, object> keyValues = this.GetProperty<ShippingAddress>(shippingAddress);
            var i = this.hBOrderBL.GetAllShippingAddress<ShippingAddress>(keyValues);
            return i;
        }

        /// <summary>
        /// MakePayment.
        /// </summary>
        /// <returns>Insert Result.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/getOrderStatus")]
        public object GetOrderStatus()
        {
            OrderStatus orderStatus = new OrderStatus();
            Dictionary<string, object> keyValues = this.GetProperty<OrderStatus>(orderStatus);
            var i = this.hBOrderBL.GetAllOrdersStatus<OrderStatus>(keyValues);
            return i;
        }

        /// <summary>
        /// MakePayment.
        /// </summary>
        /// <param name="orderStatus">Payment Order Details.</param>
        /// <returns>Insert Result.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/updateOrderStatus")]
        public object UpdateOrderStatus(Orders orderStatus)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Orders>(orderStatus);
            var i = this.hBOrderBL.UpdateOrderStatus<Orders>(keyValues);
            return i;
        }

        private Dictionary<string, object> GetProperty<T>(object classobject)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = classobject.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(classobject) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(classobject, null));
                }
            }

            return keyValues;
        }
    }
}