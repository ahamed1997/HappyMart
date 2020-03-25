// <copyright file="HBCustomerController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Reflection;
    using System.Web.Http.Cors;
    using HappyBuyBL;
    using HappyBuyDAL;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Customer WebAPI.
    /// </summary>
    [EnableCors("http://localhost:4200", "*", "GET,PUT,POST")]
    public class HBCustomerController : Controller
    {
        private HBCustomerBL devHappyBuyBL = new HBCustomerBL();

        /// <summary>
        /// Customer Registration.
        /// </summary>
        /// <param name="customer">Customer Object Properties.</param>
        /// <returns>Returns Inserted resulted.</returns>
        public int RegisterCustomer(Customer customer)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Customer>(customer);
            int i = this.devHappyBuyBL.RegisterCustomer<Customer>(keyValues);
            return i;
        }

        /// <summary>
        /// Get Properties for the Model.
        /// </summary>
        /// <typeparam name="T">Generic Dictionary.</typeparam>
        /// <param name="classobject">Dynamic Object.</param>
        /// <returns>Property Dictionary.</returns>
        public Dictionary<string, object> GetProperty<T>(object classobject)
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

        /// <summary>
        /// Add Shipping Address for the Customer.
        /// </summary>
        /// <param name="shippingAddress">ShippingAddress Object Properties.</param>
        /// <returns>Returns Inserted Reuslt.</returns>
        public int AddShippingAddress(ShippingAddress shippingAddress)
        {
            Dictionary<string, object> keyValues = this.GetProperty<ShippingAddress>(shippingAddress);
            int i = this.devHappyBuyBL.AddShippingAddress<ShippingAddress>(keyValues);
            return i;
        }

        /// <summary>
        /// Get All Customer Details.
        /// </summary>
        /// <param name="customer">CustomerId.</param>
        /// <returns>Returns the Customer Object.</returns>
        public object GetAllCustomers(Customer customer)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Customer>(customer);

            var getCustomer = this.devHappyBuyBL.GetAllCustomers<Customer>(keyValues);
            return getCustomer;
        }

        /// <summary>
        /// Update Shipping Address.
        /// </summary>
        /// <param name="shippingAddress">Update Details.</param>
        /// <returns>Updated Results.</returns>
        public int UpdateShippingAddress(ShippingAddress shippingAddress)
        {
            Dictionary<string, object> keyValues = this.GetProperty<ShippingAddress>(shippingAddress);

            int i = this.devHappyBuyBL.UpdateShippingAddress<ShippingAddress>(keyValues);
            return i;
        }
    }
}