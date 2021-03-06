using Activa.Api.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Activa.Api.Infraestructure
{
    public class ActivaDbContext : DbContext
    {
        public DbSet<PhotoFavorite> Favorites { get; set; }

        public ActivaDbContext(DbContextOptions options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ActivaDbContext).Assembly);
        }
    }
}
