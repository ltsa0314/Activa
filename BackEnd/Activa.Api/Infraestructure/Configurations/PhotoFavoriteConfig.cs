using Activa.Api.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Activa.Api.Infraestructure.Configurations
{
    public class PhotoFavoriteConfig : IEntityTypeConfiguration<PhotoFavorite>
    {
        public void Configure(EntityTypeBuilder<PhotoFavorite> builder)
        {
            builder.ToTable("PhotoFavorite");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.Author).IsRequired().HasMaxLength(100);
            builder.Property(x => x.Width).IsRequired();
            builder.Property(x => x.Height).IsRequired();
        }
    }
}
