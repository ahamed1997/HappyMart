// <copyright file="HBCartController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace HappyBuy.ECommerceProject.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using System.Web.Http.Cors;
    using HappyBuyBL;
    using HappyBuyDAL;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Cart WebAPI Controller.
    /// </summary>
    [EnableCors("http://localhost:4200", "*", "GET,PUT,POST")]
    public class HBCartController : Controller
    {
        private HBCartBL hBCartBL = new HBCartBL();

        /// <summary>
        /// Add Items to Cart.
        /// </summary>
        /// <param name="cart">Cart Parameters.</param>
        /// <returns>Returns Registered Results.</returns>
        public int AddToCart(Cart cart)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = cart.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                keyValues.Add(info.Name, info.GetValue(cart, null));
            }

            int i = this.hBCartBL.AddToCart<Cart>(keyValues);
            return i;
        }

        /// <summary>
        /// Updation of Cart Details.
        /// </summary>
        /// <param name="cart">Cart Parameters.</param>
        /// <returns>Returns Updated Results.</returns>
        public int UpdateCartQuantity(Cart cart)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = cart.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                keyValues.Add(info.Name, info.GetValue(cart, null));
            }

            int i = this.hBCartBL.UpdateCartQuantity<Cart>(keyValues);
            return i;
        }

        /// <summary>
        /// Remove Items in cart.
        /// </summary>
        /// <param name="cart">Item to be removed.</param>
        /// <returns>Returns the Removed cart Id.</returns>
        public int RemoveCartItem(Cart cart)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = cart.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                keyValues.Add(info.Name, info.GetValue(cart, null));
            }

            int i = this.hBCartBL.RemoveCartItem<Cart>(keyValues);
            return i;
        }

        /// <summary>
        /// Get Cart Details for Customer.
        /// </summary>
        /// <param name="cart">Customer Id.</param>
        /// <returns>Cart Items.</returns>
        public object GetCartItems(Cart cart)
        {
            Product product = new Product();
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            Dictionary<string, object> keyValues2 = new Dictionary<string, object>();
            Dictionary<string, object> keyValues3 = new Dictionary<string, object>();
            PropertyInfo[] infos = cart.GetType().GetProperties();
            keyValues = cart.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public)
            .ToDictionary(prop => prop.Name, prop => prop.GetValue(cart));
            keyValues2 = product.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public)
          .ToDictionary(prop => prop.Name, prop => prop.GetValue(product));
            foreach (var item in keyValues)
            {
                keyValues3.Add(item.Key, item.Value);
            }

            foreach (var item in keyValues2)
            {
                keyValues3.Add(item.Key, item.Value);
            }

            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(cart) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(cart, null));
                }
            }

            infos = product.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(product) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(cart, null));
                }
            }

            var getCartDetails = this.hBCartBL.GetCartItems<Cart>(keyValues);
            return getCartDetails;
        }
    }
}