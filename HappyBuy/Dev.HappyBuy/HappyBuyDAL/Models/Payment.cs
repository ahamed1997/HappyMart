using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace HappyBuyDAL
{
    [Table("Payment")]
    public class Payment
    {
        string Id { get; set; }
        string CustomerId { get; set; }
        string PaymentMode { get; set; }
        string AmountPaid { get; set; }
        DateTime DateOdPayment { get; set; }
    }
}
