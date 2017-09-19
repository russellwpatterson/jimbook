namespace JimBook.Models 
{
    public class Post 
    {
        public long Id { get; set; }
        public string Title { get; set; } = "";
        public string Text { get; set; } = "";
        public int SoGoods { get; set; }
        public int NotSoGoods { get; set; }
    }
}