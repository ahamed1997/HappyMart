using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web.Http.Cors;
using HappyBuyBL;
using HappyBuyDAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HappyBuy.ECommerceProject.Controllers
{
    [EnableCors("http://localhost:4200", "*", "GET,PUT,POST")]

    public class HBCartController : Controller
    {
        private HBCartBL hBCartBL = new HBCartBL();
        // GET: HBCustomer
        public int RegisterCustomer(Cart cart)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = cart.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                keyValues.Add(info.Name, info.GetValue(cart, null));
            }
            int i = hBCartBL.AddToCart<Cart>(keyValues);
            return i;
        }
        public int UpdateCartQuantity(Cart cart)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = cart.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                keyValues.Add(info.Name, info.GetValue(cart, null));
            }
            int i = hBCartBL.UpdateCartQuantity<Cart>(keyValues);
            return i;
        }
        public int RemoveCartItem(Cart cart)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = cart.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                keyValues.Add(info.Name, info.GetValue(cart, null));
            }
            int i = hBCartBL.RemoveCartItem<Cart>(keyValues);
            return i;
        }
        public Object GetCartItems(Cart cart)
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
                keyValues3.Add(item.Key,item.Value);
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
            var GetData = hBCartBL.GetCartItems<Cart>(keyValues);
            return GetData;
        }
    }
}