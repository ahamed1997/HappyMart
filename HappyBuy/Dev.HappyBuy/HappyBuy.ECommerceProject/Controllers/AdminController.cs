// <copyright file="AdminController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using System.Threading.Tasks;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Admin WebAPI.
    /// </summary>
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IHBAdminBL hBAdminBL;

        /// <summary>
        /// Initializes a new instance of the <see cref="AdminController"/> class.
        /// </summary>
        /// <param name="hBAdminBL">Injecting Dependency.</param>
        public AdminController(IHBAdminBL hBAdminBL) => this.hBAdminBL = hBAdminBL;

        /// <summary>
        /// GetCategories.
        /// </summary>
        /// <returns>Returns Product Items.</returns>
        [Authorize]
        [HttpPost]
        [Route("api/getAllCustomers")]
        public List<Customer> GetAllCustomers()
        {
            Customer c = new Customer();
            Dictionary<string, object> keyValues = this.GetProperty<Customer>(c);
            List<Customer> customers = this.hBAdminBL.GetAllCustomers<Customer>(keyValues);
            return customers;
        }

        /// <summary>
        /// Get Properties for the Model.
        /// </summary>
        /// <typeparam name="T">Generic Dictionary.</typeparam>
        /// <param name="classobject">Dynamic Object.</param>
        /// <returns>Property Dictionary.</returns>
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