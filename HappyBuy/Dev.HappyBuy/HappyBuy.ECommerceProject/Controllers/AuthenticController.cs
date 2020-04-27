// <copyright file="AuthenticController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Reflection;
    using System.Text;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL;
    using HappyBuyDAL.Models;
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
        private readonly IHBAdminBL hBAdminBL;

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthenticController"/> class.
        /// </summary>
        /// <param name="config">Dependency Injection.</param>
        /// <param name="devHappyBuyBL">Dependency Injection for Customer.</param>
        /// <param name="hBAdminBL">Dependency Injection for Admin.</param>
        public AuthenticController(IConfiguration config, IHBCustomerBL devHappyBuyBL, IHBAdminBL hBAdminBL)
        {
            this.config = config;
            this.devHappyBuyBL = devHappyBuyBL;
            this.hBAdminBL = hBAdminBL;
        }

        /// <summary>
        /// LogIn Validation.
        /// </summary>
        /// <param name="customer">Customer Object.</param>
        /// <returns>Return Token.</returns>
        [HttpPost]
        [Route("api/LogIn")]
        public object LogIn(Customer customer)
        {
            object response = null;
            Customer customers = new Customer();
            List<Customer> customerList = null;
            Dictionary<string, object> keyValues = null;
            string[] temp = null;
            if (customer.CustomerEmail != null && customer.CustomerPassword != null)
            {
                keyValues = this.GetProperty<Customer>(customer);
                customerList = this.devHappyBuyBL.LogInValidation<Customer>(keyValues);
            }

            if (customerList.Count > 0)
            {
                customers.CustomerEmail = customerList[0].CustomerEmail.ToString();
                customers.CustomerFirstName = customerList[0].CustomerFirstName.ToString();
                customers.CustomerId = Convert.ToInt32(customerList[0].CustomerId.ToString());
                customers.CustomerLastName = customerList[0].CustomerLastName.ToString();
                customers.CustomerMobile = customerList[0].CustomerMobile.ToString();
                var tokenString = this.GenerateJSONWebToken(customers);
                response = this.Ok(new { token = tokenString });
                temp = new string[]
                {
                    customers.CustomerId.ToString(),
                    customers.CustomerFirstName,
                    customers.CustomerLastName,
                    customers.CustomerMobile,
                    customers.CustomerEmail,
                    tokenString.ToString(),
                };
            }

            return temp;
        }

        /// <summary>
        /// Admin LogIn Validation.
        /// </summary>
        /// <param name="admincredentials">Admin Object.</param>
        /// <returns>Return Token.</returns>
        [HttpPost]
        [Route("api/adminLogIn")]
        public object AdminLogIn(Admin admincredentials)
        {
            object response = null;
            Admin admin = new Admin();
            List<Admin> adminlist = null;
            Dictionary<string, object> keyValues = null;
            string[] temp = null;
            if (admin.AdminEmail != null && admin.AdminPassword != null)
            {
                keyValues = this.GetProperty<Admin>(admin);
                adminlist = this.hBAdminBL.AdminLogInValidation<Admin>(keyValues);
            }

            if (adminlist.Count > 0)
            {
                admin.AdminEmail = adminlist[0].AdminEmail.ToString();
                admin.AdminFirstName = adminlist[0].AdminFirstName.ToString();
                admin.AdminId = Convert.ToInt32(adminlist[0].AdminId.ToString());
                admin.AdminLastName = adminlist[0].AdminLastName.ToString();
                admin.AdminMobile = adminlist[0].AdminMobile.ToString();
                var tokenString = this.GenerateJSONWebTokenAdmin(admin);
                response = this.Ok(new { token = tokenString });
                temp = new string[]
                {
                    admin.AdminId.ToString(),
                    admin.AdminFirstName,
                    admin.AdminLastName,
                    admin.AdminMobile,
                    admin.AdminEmail,
                    tokenString.ToString(),
                };
            }

            return temp;
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
            var encodetoken = new JwtSecurityTokenHandler().WriteToken(token).ToString();
            return encodetoken;
        }

        private string GenerateJSONWebTokenAdmin(Admin admin)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.Sub, admin.AdminFirstName),
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.Email, admin.AdminEmail),
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.NameId, admin.AdminId.ToString()),
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.Iss, admin.AdminMobile),
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.NameId, admin.AdminLastName.ToString()),
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var token = new JwtSecurityToken(
                issuer: this.config["Jwt:Issuer"],
                audience: this.config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);
            var encodetoken = new JwtSecurityTokenHandler().WriteToken(token).ToString();
            return encodetoken;
        }
    }
}