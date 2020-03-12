using HappyBuyDAL.Enums;
using HappyBuyDAL.Implementation;
using System.Collections.Generic;

namespace HappyBuyBL
{
    public class HBCustomerBL
    {
        HappyBuyRepository happyBuyRepository;
        public HBCustomerBL()
        {
            happyBuyRepository = new HappyBuyRepository();
        }
        public int RegisterCustomer<T>(Dictionary<string, object> dictionary)
        {
            return happyBuyRepository.AddCustomer<T>(dictionary, 1);
        }
        public List<T> GetAllCustomers<T>(string value) where T : new()
        {
            return happyBuyRepository.GetAllCustomers<T>(value,2);
        }

    }
}
