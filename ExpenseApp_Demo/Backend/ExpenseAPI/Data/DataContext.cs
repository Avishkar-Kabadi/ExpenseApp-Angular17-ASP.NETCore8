using ExpenseAPI.Models;
using Microsoft.EntityFrameworkCore;

using System.Collections.Generic;

namespace ExpenseAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Expense> Expenses { get; set; }
        public DbSet<ExpenseType> ExpenseTypes { get; set; }
        public DbSet<Status> Statuses { get; set; }

    }
}
