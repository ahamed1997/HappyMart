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