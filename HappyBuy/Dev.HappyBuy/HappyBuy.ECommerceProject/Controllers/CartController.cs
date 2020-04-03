// <copyright file="CartController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using System.Web.Http.Cors;
    using HappyBuyBL;
    using HappyBuyBL.HB.BL.Interfaces;
    using HappyBuyDAL;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Cart WebAPI Controller.
    /// </summary>
    [ApiController]
    public class CartController : ControllerBase
    {
        private IHBCartBL hBCartBL;

        /// <summary>
        /// Initializes a new instance of the <see cref="CartController"/> class.
        /// </summary>
        /// <param name="hBCartBL">Injecting Dependency.</param>
        public CartController(HBCartBL hBCartBL)
        {
            this.hBCartBL = hBCartBL;
        }

        /// <summary>
        /// Add Items to Cart.
        /// </summary>
        /// <param name="cart">Cart Parameters.</param>
        /// <returns>Returns Registered Results.</returns>
        [HttpPost]
        [Route("api/AddToCart")]
        public int AddToCart(Cart cart)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Cart>(cart);

            int i = this.hBCartBL.AddToCart<Cart>(keyValues);
            return i;
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
        /// Updation of Cart Details.
        /// </summary>
        /// <param name="cart">Cart Parameters.</param>
        /// <returns>Returns Updated Results.</returns>
        [HttpPost]
        [Route("api/UpdateCartQuantity")]
        public int UpdateCartQuantity(Cart cart)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Cart>(cart);
            int i = this.hBCartBL.UpdateCartQuantity<Cart>(keyValues);
            return i;
        }

        /// <summary>
        /// Remove Items in cart.
        /// </summary>
        /// <param name="cart">Item to be removed.</param>
        /// <returns>Returns the Removed cart Id.</returns>
        [HttpPost]
        [Route("api/RemoveCartItem")]
        public int RemoveCartItem(Cart cart)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Cart>(cart);
            int i = this.hBCartBL.RemoveCartItem<Cart>(keyValues);
            return i;
        }

        /// <summary>
        /// Get Cart Details for Customer.
        /// </summary>
        /// <param name="cart">Customer Id.</param>
        /// <returns>Cart Items.</returns>
        [HttpPost]
        [Route("api/GetCartItems")]
        public object GetCartItems(Cart cart)
        {
            Product product = new Product();
            Dictionary<string, object> cartkeyValues = new Dictionary<string, object>();
            Dictionary<string, object> productkeyValues = new Dictionary<string, object>();
            Dictionary<string, object> keyValues = new Dictionary<string, object>();

            cartkeyValues = cart.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public)
            .ToDictionary(prop => prop.Name, prop => prop.GetValue(cart));

            productkeyValues = product.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public)
          .ToDictionary(prop => prop.Name, prop => prop.GetValue(product));

            foreach (var item in cartkeyValues)
            {
                keyValues.Add(item.Key, item.Value);
            }

            foreach (var item in productkeyValues)
            {
                keyValues.Add(item.Key, item.Value);
            }

            var getCartDetails = this.hBCartBL.GetCartItems<Cart>(keyValues);
            return getCartDetails;
        }
    }
}