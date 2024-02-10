using System.ComponentModel.DataAnnotations;

namespace ExpenseAPI.Models
{
    public class ExpenseType
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string ExpenseName { get; set; } = string.Empty;

        public int TotalAmount { get; set; }
    }
}
