using System.ComponentModel.DataAnnotations.Schema;

namespace HappyBuyDAL
{
    [Table("Stock")]
    public class Stock
    {
        string Id { get; set; }
        string ProductId { get; set; }
        string Quantity { get; set; }
    }
}
