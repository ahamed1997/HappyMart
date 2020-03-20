// <copyright file="HBOrderController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System.Web.Http.Cors;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Order related API's.
    /// </summary>
    [EnableCors("http://localhost:4200", "*", "GET,PUT,POST")]
    public class HBOrderController : Controller
    {
    }
}