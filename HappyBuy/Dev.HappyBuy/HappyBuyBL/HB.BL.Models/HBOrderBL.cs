// <copyright file="HBOrderBL.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuyBL
{
    using HappyBuyDAL.Implementation;

    /// <summary>
    /// Order Business Layer.
    /// </summary>
    public class HBOrderBL
    {
        private HappyBuyRepository happyBuyRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="HBOrderBL"/> class.
        /// </summary>
        public HBOrderBL()
        {
            this.happyBuyRepository = new HappyBuyRepository();
        }
    }
}
