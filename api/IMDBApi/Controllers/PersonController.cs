using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMDBApi.Models;
using IMDBApi.Tools;
using LocalModel.Services.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IMDBApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        IPersonService _personService;
        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_personService.GetAll());
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }

        }
        /// <summary>
        /// Détail d'une personne
        /// </summary>
        /// <response code="200">Renvoi le détail d'une personne ainsi que sa filmographie</response>
        /// <response code="400">Une erreur côté serveur</response>
        /// <remarks>Accessible si connecté</remarks>
        [Authorize("User")]
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_personService.GetComplete(id));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }

        }
        /// <summary>
        /// Enregistrement d'une personne sur base d'un model Person
        /// </summary>
        /// <response code="200"></response>
        /// <response code="400">Une erreur côté serveur</response>
        /// <remarks>Accessible si role Admin</remarks>
        [Authorize("Admin")]
        [HttpPost]
        public IActionResult Post(Person p)
        {
            try
            {
                _personService.Create(p.toLocal());
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }

        }
        /// <summary>
        /// Définit uen personne acteur d'un film sur base d'un model Actor
        /// </summary>
        /// <response code="200"></response>
        /// <response code="400">Une erreur côté serveur</response>
        /// <remarks>Accessible si role Admin</remarks>
        [Authorize("Admin")]
        [HttpPost("setActor")]
        public IActionResult Post(Actor a)
        {
            try
            {
                _personService.SetAsActor(a.MovieId, a.PersonId, a.Role);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}