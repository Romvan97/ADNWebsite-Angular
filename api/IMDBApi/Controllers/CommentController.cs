using System;
using System.Collections.Generic;
using System.Data.Odbc;
using System.Linq;
using System.Threading.Tasks;
using LocalModel.Models;
using LocalModel.Services.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IMDBApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        ICommentService<Comment> _service;
        public CommentController(ICommentService<Comment> service)
        {
            _service = service;
        }
        /// <summary>
        /// Liste des commentaires sur base de l'id d'un film
        /// </summary>
        /// <response code="200"></response>
        /// <response code="400">Une erreur côté serveur</response>
        /// <remarks></remarks>
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_service.GetByMovieId(id));
            }
            catch (Exception e)
            {
                return BadRequest("Email ou password incorrect");
            }

        }

        /// <summary>
        /// Permet d'ajouter un commentaire sur un film
        /// </summary>
        /// <response code="200"></response>
        /// <response code="400">Une erreur côté serveur</response>
        /// <remarks>Accessible si connecté</remarks>
        [HttpPost]
        public IActionResult Post(Comment c)
        {
            try
            {
                _service.Insert(c);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }

        }

        /// <summary>
        /// Supprime un commentaire
        /// </summary>
        /// <response code="200"></response>
        /// <response code="400">Une erreur côté serveur</response>
        /// <remarks>Accessible si role Admin</remarks>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _service.Delete(id);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }

        }
    }
}