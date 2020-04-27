// <copyright file="HBAdminBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL.HB.BL.Models
{
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL.Interfaces;
    using System.Collections.Generic;

    /// <summary>
    /// Admin Business Layer.
    /// </summary>
    public class HBAdminBL : IHBAdminBL
    {
        private readonly IHappyBuyRepository happyBuyRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="HBAdminBL"/> class.
        /// </summary>
        /// <param name="happyBuyRepository">Interface Injection.</param>
        public HBAdminBL(IHappyBuyRepository happyBuyRepository)
        {
            this.happyBuyRepository = happyBuyRepository;
        }

        /// <summary>
        /// LogIn Validation.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Input Parameters.</param>
        /// <returns>Customer Details.</returns>
        public List<T> AdminLogInValidation<T>(Dictionary<string, object> dictionary)
            where T : new()
        {
            return this.happyBuyRepository.GetAllDetails<T>(dictionary, 30);
        }
    }
}
