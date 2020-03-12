using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using HappyBuyBL;
using HappyBuyDAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HappyBuy.ECommerceProject.Controllers
{
    public class HBProductController : Controller
    {
        private HBProductBL devHappyBuyBL = new HBProductBL();
        // GET: HBCustomer
        public int RegisterCustomer(Product product)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            //keyValues= customer.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public)
            // .ToDictionary(prop => prop.Name, prop => prop.GetValue(customer));
            PropertyInfo[] infos = product.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                keyValues.Add(info.Name, info.GetValue(product, null));
            }
            int i = devHappyBuyBL.AddProduct<Product>(keyValues);
            return i;
        }

    }
}