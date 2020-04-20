// <copyright file="CustomerController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System.Collections.Generic;
    using System.Reflection;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Customer WebAPI.
    /// </summary>
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly IHBCustomerBL devHappyBuyBL;

        /// <summary>
        /// Initializes a new instance of the <see cref="CustomerController"/> class.
        /// </summary>
        /// <param name="devHappyBuyBL">Interface Injection.</param>
        public CustomerController(IHBCustomerBL devHappyBuyBL)
        {
            this.devHappyBuyBL = devHappyBuyBL;
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
        /// Customer Registration.
        /// </summary>
        /// <param name="customer">Customer Object Properties.</param>
        /// <returns>Returns Inserted resulted.</returns>
        [HttpPost]
        [Route("api/RegisterCustomer")]
        public int RegisterCustomer(Customer customer)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Customer>(customer);
            int i = this.devHappyBuyBL.RegisterCustomer<Customer>(keyValues);
            return i;
        }

        /// <summary>
        /// Update Profile validation.
        /// </summary>
        /// <param name="customer">Customer Object Properties.</param>
        /// <returns>Validation.</returns>
        [HttpPost]
        [Route("api/UpdateProfileValidation")]
        public int UpdateProfileValidation(Customer customer)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Customer>(customer);
            int i = this.devHappyBuyBL.UpdateProfileValidation<Customer>(keyValues);
            return i;
        }

        /// <summary>
        /// Add Shipping Address for the Customer.
        /// </summary>
        /// <param name="shippingAddress">ShippingAddress Object Properties.</param>
        /// <returns>Returns Inserted Reuslt.</returns>
        [HttpPost]
        [Route("api/AddShippingAddress")]
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
        [HttpPost]
        [Route("api/GetMyProfile")]
        public object GetMyProfile(Customer customer)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Customer>(customer);

            var getCustomer = this.devHappyBuyBL.GetMyProfile<Customer>(keyValues);
            return getCustomer;
        }

        /// <summary>
        /// Get All Customer Details.
        /// </summary>
        /// <param name="customer">CustomerId.</param>
        /// <returns>Returns the Customer Object.</returns>
        [HttpPost]
        [Route("api/updateProfile")]
        public int UpdateProfile(Customer customer)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Customer>(customer);

            int result = this.devHappyBuyBL.UpdateProfile<Customer>(keyValues);
            return result;
        }

        /// <summary>
        /// Update Shipping Address.
        /// </summary>
        /// <param name="shippingAddress">Update Details.</param>
        /// <returns>Updated Results.</returns>
        [HttpPost]
        [Route("api/UpdateShippingAddress")]
        public int UpdateShippingAddress(ShippingAddress shippingAddress)
        {
            Dictionary<string, object> keyValues = this.GetProperty<ShippingAddress>(shippingAddress);

            int i = this.devHappyBuyBL.UpdateShippingAddress<ShippingAddress>(keyValues);
            return i;
        }
    }
}