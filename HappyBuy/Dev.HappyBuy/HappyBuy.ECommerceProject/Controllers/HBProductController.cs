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
        private HBProductBL hBProductBL = new HBProductBL();
        public int InsertProduct(Product product)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = product.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if(info.GetValue(product) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(product, null));
                }
            }
            int i = hBProductBL.AddProduct<Product>(keyValues);
            return i;
        }
        public int UpdateProductDetails(Product product)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = product.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(product) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(product, null));
                }
            }
            int i = hBProductBL.UpdateProductDetails<Product>(keyValues);
            return i;
        }
        public int InsertCategory(Category category)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = category.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(category) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(category, null));
                }
            }
            int i = hBProductBL.InsertCategory<Category>(keyValues);
            return i;
        }
        public int InsertSubCategory(SubCategory subCategory)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = subCategory.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(subCategory) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(subCategory, null));
                }
            }
            int i = hBProductBL.InsertSubCategory<SubCategory>(keyValues);
            return i;
        }
        public Object GetProducts(Product product)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = product.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(product) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(product, null));
                }
            }
            var GetProducts = hBProductBL.GetProducts<Product>(keyValues);
            return GetProducts;
        }

    }
}