﻿// <copyright file="HBCustomerBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL
{
    using System.Collections.Generic;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL.Implementation;
    using HappyBuyDAL.Interfaces;

    /// <summary>
    /// Business Layer for Cutsomer.
    /// </summary>
    public class HBCustomerBL : IHBCustomerBL
    {
        private readonly IHappyBuyRepository happyBuyRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="HBCustomerBL"/> class.
        /// </summary>
        /// <param name="happyBuyRepository">Interface Injection.</param>
        public HBCustomerBL(IHappyBuyRepository happyBuyRepository)
        {
            this.happyBuyRepository = happyBuyRepository;
        }

        /// <summary>
        /// Registering Customer.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Customer type Dictionary.</param>
        /// <returns>Insertion Results.</returns>
        public int RegisterCustomer<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 3);
        }

        /// <summary>
        /// Add Shipping Address of Customer.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">ShippingAddress type Dictionary.</param>
        /// <returns>Insertion Results.</returns>
        public int AddShippingAddress<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 2);
        }

        /// <summary>
        /// UpdateProfileValidation.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Customer type Dictionary.</param>
        /// <returns>Update Results.</returns>
        public int UpdateProfileValidation<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 27);
        }

        /// <summary>
        /// Update in Profile.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Customer type Dictionary.</param>
        /// <returns>Update Results.</returns>
        public int UpdateProfile<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 24);
        }

        /// <summary>
        /// Update Shipping Address.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">ShippingAddress type Dictionary.</param>
        /// <returns>Update Results.</returns>
        public int UpdateShippingAddress<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.UpdateDetails<T>(dictionary, 15);
        }

        /// <summary>
        /// Getting Customer Details.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Customer Details.</returns>
        public List<T> GetMyProfile<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetOneDetail<T>(dictionary, 4);
        }

        /// <summary>
        /// LogIn Validation.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Customer Details.</returns>
        public List<T> LogInValidation<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 18);
        }

        /// <summary>
        /// Check for Email exist.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Customer.</param>
        /// <returns>Existence result.</returns>
        public int ForgotPassword<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 22);
        }

        /// <summary>
        /// Change Password.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Customer.</param>
        /// <returns>Change result.</returns>
        public int UpdatePassword<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 23);
        }
    }
}
