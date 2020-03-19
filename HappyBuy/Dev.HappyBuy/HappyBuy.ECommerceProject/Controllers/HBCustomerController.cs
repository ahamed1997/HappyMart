using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using HappyBuyBL;
using HappyBuyDAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HappyBuy.ECommerceProject.Controllers
{
    [EnableCors("http://localhost:4200", "*", "GET,PUT,POST")]
    public class HBCustomerController : Controller
    {
        private HBCustomerBL devHappyBuyBL = new HBCustomerBL();
        // GET: HBCustomer
        public int RegisterCustomer(Customer customer)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = customer.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                keyValues.Add(info.Name, info.GetValue(customer, null));
            }
            int i = devHappyBuyBL.RegisterCustomer<Customer>(keyValues);
            return i;
        }
        public int AddShippingAddress(ShippingAddress shippingAddress)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = shippingAddress.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                keyValues.Add(info.Name, info.GetValue(shippingAddress, null));
            }
            int i = devHappyBuyBL.AddShippingAddress<ShippingAddress>(keyValues);
            return i;
        }
        public Object GetAllCustomers(Customer customer)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = customer.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                if (info.GetValue(customer) != null)
                {
                    keyValues.Add(info.Name, info.GetValue(customer, null));
                }
            }
            var GetData = devHappyBuyBL.GetAllCustomers<Customer>(keyValues);
            return GetData;
        }
        public int UpdateShippingAddress(ShippingAddress shippingAddress)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            PropertyInfo[] infos = shippingAddress.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                keyValues.Add(info.Name, info.GetValue(shippingAddress, null));
            }
            int i = devHappyBuyBL.UpdateShippingAddress<ShippingAddress>(keyValues);
            return i;
        }
    }
}