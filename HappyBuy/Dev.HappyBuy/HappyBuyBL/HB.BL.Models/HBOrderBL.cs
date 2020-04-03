// <copyright file="HBOrderBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL
{
    using System.Collections.Generic;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL.Implementation;
    using HappyBuyDAL.Interfaces;

    /// <summary>
    /// Order Business Layer.
    /// </summary>
    public class HBOrderBL : IHBOrderBL
    {
        private readonly IHaapyBuyRepository happyBuyRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="HBOrderBL"/> class.
        /// </summary>
        /// <param name="happyBuyRepository">Repository Injection.</param>
        public HBOrderBL(IHaapyBuyRepository happyBuyRepository)
        {
            this.happyBuyRepository = happyBuyRepository;
        }

        /// <summary>
        /// Place Order.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Orders type Dictionary.</param>
        /// <returns>Insertion Results.</returns>
        public int PlaceOrder<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 11);
        }

        /// <summary>
        /// MakePayment fro Customer.
        /// </summary>
        /// <typeparam name="T">Dynamic Object.</typeparam>
        /// <param name="dictionary">Payments type Dictionary.</param>
        /// <returns>Insertion Results.</returns>
        public int MakePayment<T>(Dictionary<string, object> dictionary)
        {
            return this.happyBuyRepository.AddDetails<T>(dictionary, 19);
        }
    }
}
