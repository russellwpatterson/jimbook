using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using JimBook.Models;
using JimBook.Contexts;
using System.Linq;
using System;
using System.Net;

namespace JimBook.Controllers
{
    [Route("api/posts")]
    public class PostsController : Controller
    {
        private JimBookContext _context = null;

        public PostsController(JimBookContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public IActionResult List()
        {
            return Json(this._context.Posts.ToList());
        }

        [HttpPost]
        public IActionResult Create([FromBody] Post post)
        {
            try 
            {
                this._context.Posts.Add(post);
                this._context.SaveChanges();
            }
            catch (Exception)
            {
                return new StatusCodeResult(500);
            }
            
            return Ok(post);
        }

        [HttpPost("{id}/sogood")]
        public IActionResult SoGood(int id)
        {
            try 
            {
                var post = this._context.Posts.First(p => p.Id == id);

                post.SoGoods++;

                this._context.SaveChanges();
            }
            catch (Exception)
            {
                return new StatusCodeResult(500);
            }
            
            return Ok();
        }

        [HttpPost("{id}/notsogood")]
        public IActionResult NotSoGood(int id)
        {
            try 
            {
                var post = this._context.Posts.First(p => p.Id == id);

                post.NotSoGoods++;

                this._context.SaveChanges();
            }
            catch (Exception)
            {
                return new StatusCodeResult(500);
            }
            
            return Ok();
        }
    }
}