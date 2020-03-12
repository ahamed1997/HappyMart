using System.ComponentModel.DataAnnotations.Schema;

namespace HappyBuyDAL
{
    [Table("Cart")]
    public class Cart
    {
        string Id { get; set; }
        string CustomerId { get; set; }
        string ProductId { get; set; }
        string TotalPrice { get; set; }
        int Quantity { get; set; }
    }
}
