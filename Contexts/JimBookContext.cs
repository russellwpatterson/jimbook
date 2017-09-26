using JimBook.Models;
using Microsoft.EntityFrameworkCore;

namespace JimBook.Contexts
{
    public class JimBookContext : DbContext
    {
        public JimBookContext(DbContextOptions<JimBookContext> options) : base(options) { }
        public JimBookContext() { }

        public DbSet<Post> Posts { get; set; }
    }
}