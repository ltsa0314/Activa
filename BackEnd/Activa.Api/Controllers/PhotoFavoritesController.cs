using Activa.Api.Domain.Contracts;
using Activa.Api.Domain.Models;
using Activa.Api.Infraestructure;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Activa.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhotoFavoritesController : ControllerBase
    {
        private readonly IPhotoFavoriteRepository _repository;
        public PhotoFavoritesController(IPhotoFavoriteRepository repository)
        {
            _repository = repository;

        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_repository.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Insert(PhotoFavorite model)
        {
            try
            {
                _repository.Insert(model);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{Id}")]
        public IActionResult Remove(string Id)
        {
            try
            {
                _repository.Remove(Id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
