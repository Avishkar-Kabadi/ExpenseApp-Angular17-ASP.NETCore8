using System.ComponentModel.DataAnnotations;

namespace ExpenseAPI.Models
{
    public class Expense
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string Status { get; set; } = string.Empty;

        [StringLength(200)]
        public string Comments { get; set; } = string.Empty;

        public int PayingAmount { get; set; }

        public int PendingAmount { get; set; }

        public string SelectedDate { get; set; }

        public int ExpenseTypeId { get; set; }

        public ExpenseType? ExpenseType { get; set; }

    }
}
