using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using JimBook.Models;

namespace JimBook.Controllers
{
    [Route("api/posts")]
    public class PostsController : Controller
    {
        [HttpGet]
        public IActionResult List()
        {
            return Json(new List<Post>() {
                new Post() {
                    Id = 1,
                    Title = "Test Post",
                    Text = "This is the text!",
                    SoGoods = 5,
                    NotSoGoods = 4
                }
            });
        }

        [HttpPost]
        public IActionResult Create()
        {
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Post post)
        {
            return Ok();
        }

        [HttpPut("{id}/sogood")]
        public IActionResult MarkSoGood(int id)
        {
            return Ok();
        }

        [HttpPut("{id}/notsogood")]
        public IActionResult MarkNotSoGood(int id)
        {
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id) 
        {
            return Ok();
        }
    }
}