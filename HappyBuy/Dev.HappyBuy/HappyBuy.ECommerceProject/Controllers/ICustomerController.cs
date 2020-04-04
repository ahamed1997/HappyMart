// <copyright file="CustomerController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using HappyBuyDAL;
using System.Collections.Generic;

namespace HappyBuy.ECommerceProject.Controllers
{
    public interface ICustomerController
    {
        int RegisterCustomer(Customer customer);
        Dictionary<string, object> GetProperty<T>(object classobject);
        int AddShippingAddress(ShippingAddress shippingAddress);
        object GetMyProfile(Customer customer);
        int UpdateShippingAddress(ShippingAddress shippingAddress);
    }
}