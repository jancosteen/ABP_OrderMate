using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Products;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.ProductCategories
{
    public class ProductCategory: Entity<int>
    {
        //public int ProductCategoryId { get; set; }
        public string ProductCategory1 { get; set; }

        public virtual ICollection<Product> Product { get; set; }
    }
}
