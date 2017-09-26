using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JimBook.Models 
{
    [Table("Post")]
    public class Post 
    {
        [Key]
        public int Id { get; set; }
        public string Text { get; set; } = "";
        public int SoGoods { get; set; }
        public int NotSoGoods { get; set; }
    }
}