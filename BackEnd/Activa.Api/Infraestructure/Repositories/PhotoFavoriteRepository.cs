using Activa.Api.Domain.Contracts;
using Activa.Api.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Activa.Api.Infraestructure.Repositories
{
    public class PhotoFavoriteRepository : IPhotoFavoriteRepository
    {
        private readonly ActivaDbContext _context;
        public PhotoFavoriteRepository(ActivaDbContext context)
        {
            _context = context;

        }
        public IEnumerable<PhotoFavorite> GetAll()
        {
            return _context.Favorites.ToList();
        }

        public void Insert(PhotoFavorite model)
        {
            _context.Add(model);
            _context.SaveChanges();
        }

        public void Remove(string Id)
        {
            var model = _context.Favorites.Find(Id);

            _context.Favorites.Remove(model);
            _context.SaveChanges();
        }
    }
}
