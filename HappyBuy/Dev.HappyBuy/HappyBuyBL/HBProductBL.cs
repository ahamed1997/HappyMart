using HappyBuyDAL.Implementation;
using System;
using System.Collections.Generic;
using System.Text;

namespace HappyBuyBL
{
    public class HBProductBL
    {
        HappyBuyRepository happyBuyRepository;
        public HBProductBL()
        {
            happyBuyRepository = new HappyBuyRepository();
        }
        public int AddProduct<T>(Dictionary<string, object> dictionary)
        {
            return happyBuyRepository.AddCustomer<T>(dictionary, 7);
        }
    }
}
