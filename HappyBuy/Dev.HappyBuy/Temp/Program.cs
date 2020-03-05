using HappyBuyDAL.Implementation;
using HappyBuyDAL.Interfaces;
using System;

namespace Temp
{
    class Program
    {

        static void Main(string[] args)
        {
            ICustomer customer = new CustomerEntity();
            customer.AddCustomer();
            Console.WriteLine("Hello World!");

        }
    }
}
