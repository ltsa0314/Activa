using Activa.Api.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Activa.Api.Domain.Contracts
{
    public interface IPhotoFavoriteRepository
    {
        void Insert(PhotoFavorite model);
        void Remove(string Id);
        IEnumerable<PhotoFavorite> GetAll();
    }
}
