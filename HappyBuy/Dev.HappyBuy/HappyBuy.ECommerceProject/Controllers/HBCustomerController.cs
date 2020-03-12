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
            //keyValues= customer.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public)
            // .ToDictionary(prop => prop.Name, prop => prop.GetValue(customer));
            PropertyInfo[] infos = customer.GetType().GetProperties();
            foreach (PropertyInfo info in infos)
            {
                keyValues.Add(info.Name, info.GetValue(customer, null));
            }
            int i = devHappyBuyBL.RegisterCustomer<Customer>(keyValues);
            return i;
        }
        public Object GetAllCustomers(string value)
        {
            Dictionary<string, object> keyValues = new Dictionary<string, object>();
            List<Customer> customers = new List<Customer>();          
            var GetData = devHappyBuyBL.GetAllCustomers<Customer>(value);
            return GetData;
        }
        
    }
}