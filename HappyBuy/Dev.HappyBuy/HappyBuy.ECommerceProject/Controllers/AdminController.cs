// <copyright file="AdminController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using HappyBuyBL.HB.BL.Interfaces;
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


    }
}