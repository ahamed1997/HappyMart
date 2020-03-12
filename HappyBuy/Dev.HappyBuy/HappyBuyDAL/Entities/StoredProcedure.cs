using System;
using System.Collections.Generic;
using System.Text;

namespace HappyBuyDAL.Enums
{
    public enum StoredProcedure
    {
        sp_CustomerRegistration = 1,
        sp_GetCustomerDetails   = 2,
        sp_AddCart =3,
        sp_AddShippingAddress = 4,
        sp_GetProductDetails =5,
        sp_InsertCategory =6,
        sp_InsertProduct = 7,
        sp_InsertSubCategory =8,
        sp_MakePayment =9,
        sp_PlaceOrder =10
    }
}
