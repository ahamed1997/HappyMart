// <copyright file="AuthenticController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Reflection;
    using System.Text;
    using System.Threading.Tasks;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using Microsoft.IdentityModel.Tokens;

    /// <summary>
    /// Authentication Entity.
    /// </summary>
    [ApiController]
    public class AuthenticController : ControllerBase
    {
        private readonly IConfiguration config;
        private readonly IHBCustomerBL devHappyBuyBL;

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthenticController"/> class.
        /// </summary>
        /// <param name="config">Dependency Injection.</param>
        /// <param name="devHappyBuyBL">Dependency Injection for Customer.</param>
        public AuthenticController(IConfiguration config, IHBCustomerBL devHappyBuyBL)
        {
            this.config = config;
            this.devHappyBuyBL = devHappyBuyBL;
        }

        /// <summary>
        /// LogIn Validation.
        /// </summary>
        /// <param name="customer">Customer Object.</param>
        /// <returns>Return Token.</returns>
        [HttpPost]
        [Route("api/LogIn")]
        public IActionResult LogIn(Customer customer)
        {
            IActionResult response = this.Unauthorized();
            Customer customers = new Customer();
            List<Customer> customerList = null;
            if (customer.CustomerEmail != null && customer.CustomerPassword != null)
            {
                Dictionary<string, object> keyValues = this.GetProperty<Customer>(customer);
                customerList = this.devHappyBuyBL.LogInValidation<Customer>(keyValues);
                customers.CustomerEmail = customerList[0].CustomerEmail.ToString();
                customers.CustomerFirstName = customerList[0].CustomerFirstName.ToString();
                customers.CustomerId = Convert.ToInt32(customerList[0].CustomerId.ToString());
                customers.CustomerLastName = customerList[0].CustomerLastName.ToString();
                customers.CustomerMobile = customerList[0].CustomerMobile.ToString();
            }

            if (customers != null)
            {
                var tokenString = this.GenerateJSONWebToken(customers);
                response = this.Ok(new { token = tokenString });
            }

            return response;
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

        private string GenerateJSONWebToken(Customer customerInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.Sub, customerInfo.CustomerFirstName),
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.Email, customerInfo.CustomerEmail),
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.NameId, customerInfo.CustomerId.ToString()),
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.Iss, customerInfo.CustomerMobile),
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.NameId, customerInfo.CustomerLastName.ToString()),
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var token = new JwtSecurityToken(
                issuer: this.config["Jwt:Issuer"],
                audience: this.config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);
            var encodetoken = new JwtSecurityTokenHandler().WriteToken(token);
            return encodetoken;
        }
    }
}