﻿// <copyright file="OrderController.cs" company="PlaceholderCompany">
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
    using HappyBuyDAL.Models;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Order related API's.
    /// </summary>
    [EnableCors("http://localhost:4200", "*", "GET,PUT,POST")]
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
        /// <param name="orderPayment">Order Items.</param>
        /// <returns>Returns OrderID.</returns>
        [HttpPost]
        [Route("api/PlaceOrder")]
        public int PlaceOrder(OrderPayment orderPayment)
        {
            Dictionary<string, object> keyValues = this.GetProperty<OrderPayment>(orderPayment);
            int i = this.hBOrderBL.PlaceOrder<OrderPayment>(keyValues);
            return i;
        }

        /// <summary>
        /// MakePayment.
        /// </summary>
        /// <param name="orderDetails">Payment Order Details.</param>
        /// <returns>Insert Result.</returns>
        [HttpPost]
        [Route("api/MakePayment")]
        public int MakePayment(OrderDetails orderDetails)
        {
            Dictionary<string, object> keyValues = this.GetProperty<OrderDetails>(orderDetails);
            int i = this.hBOrderBL.PlaceOrder<OrderDetails>(keyValues);
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