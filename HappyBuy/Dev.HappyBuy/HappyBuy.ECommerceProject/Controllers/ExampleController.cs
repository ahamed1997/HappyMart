using System;
using System.Collections.Generic;
using System.Reflection;
using System.Web.Http.Cors;
using HappyBuyBL;
using HappyBuyDAL;
using Microsoft.AspNetCore.Mvc;

namespace HappyBuy.ECommerceProject.Controllers
{
    [ApiController]
    public class ExampleController : Controller
    {
        private HBProductBL hBProductBL = new HBProductBL();

       [HttpPost]
       [Route("api/InsertExaermpleProdcuts")]
        public int InsertProduct([FromBody]Product product)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Product>(product);

            int i = this.hBProductBL.AddProduct<Product>(keyValues);
            return i;
        }
        [HttpPost]
        [Route("api/InsertCategory/{category}")]
        public int InsertCategory(Category category)
        {
            Dictionary<string, object> keyValues = this.GetProperty<Category>(category);
            int i = this.hBProductBL.InsertCategory<Category>(keyValues);
            return i;
        }
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
    }
}