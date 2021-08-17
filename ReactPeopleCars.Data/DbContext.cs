using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ReactPeopleCars.Data
{
    public class PCDbContext: DbContext
    {
        private readonly string _connectionString;

        public PCDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

       
        public DbSet<Person> People { get; set; }
        public DbSet<Car> Cars { get; set; }
    }
}
