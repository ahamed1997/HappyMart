using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace HappyBuyDAL
{
    [Table("Orders")]
    public class Orders
    {
        string Id { get; set; }
        string Quantity { get; set; }
        string Price { get; set; }
        DateTime DateOrdered { get; set; }
        DateTime DateReceived { get; set; }
        string Status { get; set; }
        string CustomerId { get; set; }
        string PaymentId { get; set; }
        string ProductId { get; set; }
        string AddressId { get; set; }
    }
}
